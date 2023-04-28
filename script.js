//your JS code here. If required.
const randomDelay = () => Math.floor(Math.random() * 3000) + 1000;

      const promises = [
        new Promise((resolve) => setTimeout(resolve, randomDelay())),
        new Promise((resolve) => setTimeout(resolve, randomDelay())),
        new Promise((resolve) => setTimeout(resolve, randomDelay())),
      ];

      Promise.all(promises)
        .then(() => {
          const output = document.getElementById("output");

          const promise1Time = promises[0]._settledValueCallback
            .toString()
            .match(/\d+/)[0];
          const promise2Time = promises[1]._settledValueCallback
            .toString()
            .match(/\d+/)[0];
          const promise3Time = promises[2]._settledValueCallback
            .toString()
            .match(/\d+/)[0];
          const totalTime =
            (promises[0]._settledValueCallback +
              promises[1]._settledValueCallback +
              promises[2]._settledValueCallback) /
            1000;

          output.innerHTML = `
            <tr>
              <td>Promise 1</td>
              <td>${promise1Time / 1000}</td>
            </tr>
            <tr>
              <td>Promise 2</td>
              <td>${promise2Time / 1000}</td>
            </tr>
            <tr>
              <td>Promise 3</td>
              <td>${promise3Time / 1000}</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>${totalTime.toFixed(3)}</td>
            </tr>
          `;
        })
        .catch(console.error);