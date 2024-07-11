
const calcUrl1 = "/calc/1";
const calcUrl2 = "/calc/2";
const calcUrl3 = "/calc/3";

async function calculate1() {

    const equity = parseFloat(document.getElementById('equity1').value.replace(/,/g, '')); // הון עצמי
    const revenues = parseFloat(document.getElementById('revenues1').value.replace(/,/g, '')); // הכנסה פנויה
    const periodY = parseFloat(document.getElementById('periodY1').value); // תקופה בשנים


    try {
        const url = `${calcUrl1}?equity=${equity}&revenues=${revenues}&periodY=${periodY}`;

        const response = await axios.get(url);

        if (response.status !== 200) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        const data = response.data;

        console.log("calc1 res data: " + data.result);

        document.getElementById('result1').value = Number(data.result).toLocaleString('en');
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}


async function calculate2() {

    const equity = parseFloat(document.getElementById('equity2').value.replace(/,/g, '')); // הון עצמי
    const refund = parseFloat(document.getElementById('refund2').value.replace(/,/g, '')); // החזר חודשי רצוי
    const periodY = parseFloat(document.getElementById('periodY2').value); // תקופה בשנים

    console.log("calc 2 send equity: " + equity + " , refund: " + refund);

    try {
        const url = `${calcUrl2}?equity=${equity}&refund=${refund}&periodY=${periodY}`;

        const response = await axios.get(url);

        if (response.status !== 200) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        const data = response.data;

        console.log("calc2 res data: " + data.result);

        document.getElementById('result2').value = Number(data.result).toLocaleString('en');
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}


async function calculate3() {
    const loan = parseFloat(document.getElementById('loan3').value.replace(/,/g, '').replace(/\D/g, '')); // גובה הלוואה
    const periodY = parseFloat(document.getElementById('periodY3').value); // תקופה בשנים


    try {
        const url = `${calcUrl3}?loan=${loan}&periodY=${periodY}`;

        const response = await axios.get(url);

        if (response.status !== 200) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        const data = response.data;

        console.log("calc3 res data - resultM: " + data.resultM);
        console.log("calc3 res data - resultI: " + data.resultI);

        // Example: Update UI elements with the fetched data
        document.getElementById('resultM3').value = Number(data.resultM).toLocaleString('en');
        document.getElementById('resultI3').value = Number(data.resultI).toLocaleString('en');
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

function formatNumberWithCommas(input) {
    let value = input.value.replace(/,/g, '').replace(/\D/g, '');
    input.value = Number(value).toLocaleString('en');
}


document.addEventListener("DOMContentLoaded", function () {

    // show only one calc at a time
    document.getElementById('btn-calc-1').addEventListener('click', function () {
        document.getElementById('calc-1').classList.add('show');
        document.getElementById('calc-1').classList.add('visited');
        document.getElementById('calc-2').classList.remove('show');
        document.getElementById('calc-2').classList.remove('visited');
        document.getElementById('calc-3').classList.remove('show');
        document.getElementById('calc-3').classList.remove('visited');
    });
    document.getElementById('btn-calc-2').addEventListener('click', function () {
        document.getElementById('calc-1').classList.remove('show');
        document.getElementById('calc-1').classList.remove('visited');
        document.getElementById('calc-2').classList.add('show');
        document.getElementById('calc-2').classList.add('visited');
        document.getElementById('calc-3').classList.remove('show');
        document.getElementById('calc-3').classList.remove('visited');
    });
    document.getElementById('btn-calc-3').addEventListener('click', function () {
        document.getElementById('calc-1').classList.remove('show');
        document.getElementById('calc-2').classList.remove('show');
        document.getElementById('calc-3').classList.add('show');
    });


    // listener to add comma in numbers
    const inputIds = ['equity1', 'revenues1', 'equity2', 'refund2', 'loan3'];

    inputIds.forEach(id => {
        document.getElementById(id).addEventListener('input', function () {
            formatNumberWithCommas(this);
        });
    });
});