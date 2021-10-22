const qnarray = ['qn1', 'qn2', 'qn3', 'qn4', 'qn5', 'qn6', 'qn7', 'qn8', 'qn9', 'qn10'];
const optarray = [
    ['o1p1', 'o1p2', 'o1p3', 'o1p4'], ['o2p1', 'o2p2', 'o2p3', 'o2p4'], ['o3p1', 'o3p2', 'o3p3', 'o3p4'],
    ['o4p1', 'o4p2', 'o4p3', 'o4p4'], ['o5p1', 'o5p2', 'o5p3', 'o5p4'], ['o6p1', 'o6p2', 'o6p3', 'o6p4'],
    ['o7p1', 'o7p2', 'o7p3', 'o7p4'], ['o8p1', 'o8p2', 'o8p3', 'o8p4'], ['o9p1', 'o9p2', 'o9p3', 'o9p4'], ['o10p1', 'o10p2', 'o10p3', 'o10p4']
];
const ansarray = ['ans1', 'ans2', 'ans3', 'ans4', 'ans5', 'ans6', 'ans7', 'ans8', 'ans9', 'ans10'];
const qnA = {
    question: qnarray,
    options: optarray,
    answers: ansarray
}

// const dispQna = () => {
//     alert("hey")
// };
function dispQna() {

    for (var i = 0; i < qnarray.length; i++) {
        // var tagqn = document.createElement("p");
        // var tagopt = document.createElement("p");
        // var qn = document.createTextNode(qnarray[i]);
        // var opt = document.createTextNode(optarray[i]);
        // tagqn.appendChild(qn);
        // tagopt.appendChild(opt);
        // document.getElementById('question').appendChild(tagqn);
        // document.getElementById('option').appendChild(tagopt);

        document.getElementById('question').innerHTML += qnarray[i];
        document.getElementById('option').innerHTML += optarrayv[i];
    }
}