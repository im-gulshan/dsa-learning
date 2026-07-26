const Visualizer = {
  container: null,
  intervalId: null,

  init(containerId) {
    this.container = document.getElementById(containerId);
  },

  render(type) {
    this.clear();
    if (type === 'bubble-sort') {
      this.renderBubbleSort();
    } else if (type === 'binary-search') {
      this.renderBinarySearch();
    } else if (type === 'two-pointers' || type === 'array-search') {
      this.renderArrayViz();
    } else if (type === 'linked-list') {
      this.renderLinkedListViz();
    } else {
      this.container.innerHTML = `<div class="viz-placeholder">Visualizer ready for this topic. Click controls to simulate.</div>`;
    }
  },

  clear() {
    if (this.intervalId) clearInterval(this.intervalId);
    if (this.container) this.container.innerHTML = '';
  },

  renderArrayViz() {
    const arr = [12, 45, 23, 89, 34, 67, 90];
    const wrapper = document.createElement('div');
    wrapper.className = 'viz-bar-wrapper';

    arr.forEach((val, i) => {
      const bar = document.createElement('div');
      bar.className = 'viz-bar';
      bar.style.height = `${val * 2}px`;
      bar.innerText = val;
      wrapper.appendChild(bar);
    });

    this.container.appendChild(wrapper);
  },

  renderBubbleSort() {
    let arr = [50, 20, 40, 10, 30];
    const wrapper = document.createElement('div');
    wrapper.className = 'viz-bar-wrapper';
    this.container.appendChild(wrapper);

    const updateBars = (highlightIdx = -1, sortedIdx = arr.length) => {
      wrapper.innerHTML = '';
      arr.forEach((val, idx) => {
        const bar = document.createElement('div');
        bar.className = 'viz-bar';
        if (idx === highlightIdx || idx === highlightIdx + 1) bar.classList.add('active');
        if (idx >= sortedIdx) bar.classList.add('sorted');
        bar.style.height = `${val * 3.5}px`;
        bar.innerText = val;
        wrapper.appendChild(bar);
      });
    };

    updateBars();

    let i = 0, j = 0;
    this.intervalId = setInterval(() => {
      if (i < arr.length) {
        if (j < arr.length - i - 1) {
          if (arr[j] > arr[j + 1]) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          }
          updateBars(j, arr.length - i);
          j++;
        } else {
          j = 0;
          i++;
        }
      } else {
        updateBars(-1, 0);
        clearInterval(this.intervalId);
      }
    }, 600);
  },

  renderBinarySearch() {
    let arr = [10, 20, 30, 40, 50, 60, 70, 80];
    let target = 60;
    let low = 0, high = arr.length - 1;

    const wrapper = document.createElement('div');
    wrapper.className = 'viz-bar-wrapper';
    this.container.appendChild(wrapper);

    const draw = (l, h, mid = -1) => {
      wrapper.innerHTML = '';
      arr.forEach((val, idx) => {
        const bar = document.createElement('div');
        bar.className = 'viz-bar';
        bar.style.height = `${val * 2.2}px`;
        bar.innerText = val;

        if (idx === mid) {
          bar.classList.add('active');
        } else if (idx >= l && idx <= h) {
          bar.style.opacity = '1';
        } else {
          bar.style.opacity = '0.3';
        }
        wrapper.appendChild(bar);
      });
    };

    draw(low, high);

    this.intervalId = setInterval(() => {
      if (low <= high) {
        let mid = Math.floor((low + high) / 2);
        draw(low, high, mid);

        if (arr[mid] === target) {
          clearInterval(this.intervalId);
        } else if (arr[mid] < target) {
          low = mid + 1;
        } else {
          high = mid - 1;
        }
      } else {
        clearInterval(this.intervalId);
      }
    }, 1200);
  },

  renderLinkedListViz() {
    const wrapper = document.createElement('div');
    wrapper.className = 'viz-node-row';

    const values = [10, 20, 30, 40];
    values.forEach((val, idx) => {
      const node = document.createElement('div');
      node.className = 'viz-node';
      node.innerText = val;
      wrapper.appendChild(node);

      if (idx < values.length - 1) {
        const arrow = document.createElement('span');
        arrow.style.color = '#94a3b8';
        arrow.style.fontSize = '20px';
        arrow.innerText = '➔';
        wrapper.appendChild(arrow);
      }
    });

    this.container.appendChild(wrapper);
  }
};
