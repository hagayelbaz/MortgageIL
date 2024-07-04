
const calcUrl1 = "";
const calcUrl2 = "";
const calcUrl3 = "";


async function calculate1() {

    const equity = parseFloat(document.getElementById('equity1').value); // הון עצמי
    const revenues = parseFloat(document.getElementById('revenues1').value); // הכנסה פנויה
/*
    try {
        // Construct the URL with query parameters
        const url = `${calcUrl1}?equity=${equity}&revenues=${revenues}`;

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();

        document.getElementById('result1').value = data;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
*/
    document.getElementById('result1').value = 0;
}


function calculate2() {

    const equity = parseFloat(document.getElementById('equity2').value); // הון עצמי
    const refund = parseFloat(document.getElementById('refund2').value); // החזר חודשי רצוי
    const periodY = parseFloat(document.getElementById('periodY2').value); // תקופה בשנים

    /*
    try {
        // Construct the URL with query parameters
        const url = `${calcUrl2}?equity=${equity}&revenues=${revenues}`;

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();

        document.getElementById('result2').value = data;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
*/

    document.getElementById('result2').value = 0;
}


function calculate3() {
    const loan = parseFloat(document.getElementById('loan3').value); // גובה הלוואה
    const periodY = parseFloat(document.getElementById('periodY3').value); // תקופה בשנים
    const interest = parseFloat(document.getElementById('interest3').value); // החזר חודשי רצוי


    /*
    try {
        // Construct the URL with query parameters
        const url = `${calcUrl1}?equity=${equity}&revenues=${revenues}`;

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();

        const { monthlyPayment, totalInterest} = data;

        document.getElementById('resultM3').value = monthlyPayment;
        document.getElementById('resultI3').value = totalInterest;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
*/

    document.getElementById('resultM3').value = 0;
    document.getElementById('resultI3').value = 0;
}

document.addEventListener("DOMContentLoaded", function () {

    // show only one calc at a time
    document.getElementById('btn-calc-1').addEventListener('click', function () {
        document.getElementById('calc-1').classList.add('show');
        document.getElementById('calc-2').classList.remove('show');
        document.getElementById('calc-3').classList.remove('show');
    });
    document.getElementById('btn-calc-2').addEventListener('click', function () {
        document.getElementById('calc-1').classList.remove('show');
        document.getElementById('calc-2').classList.add('show');
        document.getElementById('calc-3').classList.remove('show');
    });
    document.getElementById('btn-calc-3').addEventListener('click', function () {
        document.getElementById('calc-1').classList.remove('show');
        document.getElementById('calc-2').classList.remove('show');
        document.getElementById('calc-3').classList.add('show');
    });


});