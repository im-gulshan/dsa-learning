document.addEventListener('DOMContentLoaded', () => {
  let currentModuleIdx = 0;
  let currentTopicIdx = 0;
  let completedTopics = JSON.parse(localStorage.getItem('namaste_dsa_progress') || '{}');

  const moduleNav = document.getElementById('module-nav');
  const topicList = document.getElementById('topic-list');
  const codeEditor = document.getElementById('code-editor');
  const consoleOutput = document.getElementById('console-output');
  const runCodeBtn = document.getElementById('run-code-btn');
  const resetCodeBtn = document.getElementById('reset-code-btn');
  const markCompleteBtn = document.getElementById('mark-complete-btn');

  Visualizer.init('viz-canvas-container');

  function renderModules() {
    moduleNav.innerHTML = '';
    dsaData.forEach((mod, idx) => {
      const modEl = document.createElement('div');
      modEl.className = 'nav-module';
      
      const titleEl = document.createElement('div');
      titleEl.className = `nav-module-title ${idx === currentModuleIdx ? 'active' : ''}`;
      titleEl.innerHTML = `<span>${mod.title}</span> <span>${idx === currentModuleIdx ? '▼' : '▶'}</span>`;
      titleEl.addEventListener('click', () => {
        currentModuleIdx = idx;
        currentTopicIdx = 0;
        renderModules();
        renderTopics();
        loadTopic();
      });

      modEl.appendChild(titleEl);
      moduleNav.appendChild(modEl);
    });

    updateOverallProgress();
  }

  function renderTopics() {
    topicList.innerHTML = '';
    const currentModule = dsaData[currentModuleIdx];

    document.getElementById('module-tag').innerText = `Module ${currentModuleIdx + 1}`;
    document.getElementById('module-title').innerText = currentModule.title;
    document.getElementById('module-desc').innerText = currentModule.description;

    currentModule.topics.forEach((topic, idx) => {
      const isCompleted = !!completedTopics[topic.id];
      const item = document.createElement('div');
      item.className = `topic-item ${idx === currentTopicIdx ? 'active' : ''} ${isCompleted ? 'completed' : ''}`;
      item.innerHTML = `
        <span class="topic-item-name">${topic.title}</span>
        <span class="topic-status">${isCompleted ? '✓' : ''}</span>
      `;
      item.addEventListener('click', () => {
        currentTopicIdx = idx;
        renderTopics();
        loadTopic();
      });
      topicList.appendChild(item);
    });
  }

  function loadTopic() {
    const topic = dsaData[currentModuleIdx].topics[currentTopicIdx];

    document.getElementById('lesson-title').innerText = topic.title;
    document.getElementById('lesson-difficulty').innerText = topic.difficulty;
    document.getElementById('lesson-difficulty').className = `diff-badge diff-${topic.difficulty.toLowerCase()}`;
    document.getElementById('lesson-time').innerText = `⏱️ ${topic.timeEst}`;
    document.getElementById('lesson-notes').innerHTML = topic.notes;

    codeEditor.value = topic.codeSnippet;
    consoleOutput.innerText = '// Click "Run Code" to test execution...';

    // Render Visualizer
    Visualizer.render(topic.vizType);

    // Update Completion Button state
    if (completedTopics[topic.id]) {
      markCompleteBtn.style.background = 'var(--accent-emerald)';
      markCompleteBtn.style.color = '#000';
      markCompleteBtn.innerHTML = '<span>✓</span> Completed';
    } else {
      markCompleteBtn.style.background = 'rgba(16, 185, 129, 0.1)';
      markCompleteBtn.style.color = 'var(--accent-emerald)';
      markCompleteBtn.innerHTML = '<span>✓</span> Mark as Completed';
    }

    // Problems
    const probList = document.getElementById('problem-list');
    probList.innerHTML = '';
    topic.problems.forEach(p => {
      const li = document.createElement('li');
      li.className = 'problem-item';
      li.innerHTML = `
        <span>${p.name}</span>
        <a href="${p.link}" target="_blank" rel="noopener noreferrer" class="problem-link">Solve on LeetCode ↗</a>
      `;
      probList.appendChild(li);
    });
  }

  // Code runner
  runCodeBtn.addEventListener('click', () => {
    const code = codeEditor.value;
    const logs = [];
    const originalLog = console.log;

    console.log = (...args) => {
      logs.push(args.map(a => typeof a === 'object' ? JSON.stringify(a) : a).join(' '));
      originalLog.apply(console, args);
    };

    try {
      const runFn = new Function(code);
      runFn();
      consoleOutput.innerText = logs.length ? logs.join('\n') : 'Code executed successfully with no output.';
      consoleOutput.style.color = '#34d399';
    } catch (err) {
      consoleOutput.innerText = `Error: ${err.message}`;
      consoleOutput.style.color = '#f87171';
    } finally {
      console.log = originalLog;
    }
  });

  resetCodeBtn.addEventListener('click', () => {
    const topic = dsaData[currentModuleIdx].topics[currentTopicIdx];
    codeEditor.value = topic.codeSnippet;
    consoleOutput.innerText = '// Reset code to default snippet.';
    consoleOutput.style.color = '#94a3b8';
  });

  markCompleteBtn.addEventListener('click', () => {
    const topic = dsaData[currentModuleIdx].topics[currentTopicIdx];
    if (completedTopics[topic.id]) {
      delete completedTopics[topic.id];
    } else {
      completedTopics[topic.id] = true;
    }
    localStorage.setItem('namaste_dsa_progress', JSON.stringify(completedTopics));
    renderTopics();
    loadTopic();
    updateOverallProgress();
  });

  function updateOverallProgress() {
    let totalTopics = 0;
    dsaData.forEach(m => totalTopics += m.topics.length);
    const completedCount = Object.keys(completedTopics).length;
    const pct = totalTopics > 0 ? Math.round((completedCount / totalTopics) * 100) : 0;

    document.getElementById('overall-progress-pct').innerText = `${pct}%`;
    document.getElementById('overall-progress-bar').style.width = `${pct}%`;
  }

  // Initial load
  renderModules();
  renderTopics();
  loadTopic();
});
