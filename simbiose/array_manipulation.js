var entrada = [];

entrada = [19,28,419,
4,23,680,
5,6,907,
19,33,582,
5,9,880,
10,13,438,
21,39,294,
13,18,678,
12,26,528,
15,30,261,
8,9,48,
21,23,131,
20,21,7,
13,40,65,
13,23,901,
15,15,914,
14,35,704,
20,39,522,
10,18,379,
16,27,8,
25,40,536,
5,9,190,
17,20,809,
8,20,453,
22,37,298,
19,37,112,
2,5,186,
21,29,184,
23,30,625,
2,8,960]

let a = entrada[0];
let b = entrada[1];
let k = entrada[2];

var interval = [];
interval.push({a: a-1, b: b-1, v: k})

for(var i=3; i<entrada.length; i+=3){
    let a_ = entrada[i];
    let b_ = entrada[i+1];
    let k_ = entrada[i+2];

    if(a_<a && b_>a){
        console.log("["+a_+" - "+b_+"] INTERSECAO");
    }
    //console.log(entrada[i]+"-"+entrada[i+1]+"-"+entrada[i+2]);
}