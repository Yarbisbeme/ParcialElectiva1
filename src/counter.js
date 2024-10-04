let count = 0;
const counterDisplay = document.getElementById('counter');

        function updateCounter() {
            counterDisplay.innerHTML = count;
        }

        function increaseCount() {
            count++;
            updateCounter();
        }

        function decreaseCount() {
            if (count > 0) {
                count--;
            }
            updateCounter();
        }

        function resetCount() {
            count = 0;
            updateCounter();
        }
