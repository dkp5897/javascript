let e1 = {firstName: 'Deepak', lastName:'Kumar'}
let e2 = {firstName: 'Pradeep', lastName:'Kumar'}

function invite(g1,g2){
    console.log(g1+" "+this.firstName+" "+this.lastName+", "+g2);
}

invite.call(e1,"Hello","How are you ?");
invite.call(e2,"Hello","How are you ?")

invite.apply(e1,["Hello","How are you ?"])

let bind1=invite.bind(e1)
let bind2=invite.bind(e2)

bind1("Hello","How are you ?")