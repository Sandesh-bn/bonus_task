var data = [
{
    id: 1, value: 1, children:
     [
        {id: 2, value: -2, children: [{id: 4, value: 4, children: []}, {id: 5, value: 5, children: []}]}, {
            id: 3,
            value: 3,
            children: [{id: 6, value: 6, children: []}, {id: 7, value: 7, children: []}],
        }
    ]
}

];
let root = document.getElementById('root');
let hoverItems = document.getElementsByClassName('hover');
let titleData = document.getElementsByClassName('forTitle');

function print(a, el, val = 0, par = []) {
    if (a.length) {
        for (let i = 0; i < a.length; i++) {
            let div = document.createElement('div');
            div.classList.add('el');
            let span = document.createElement('span');
            span.classList.add('val');
            span.titleData = val + a[i].value;
            span.innerText = a[i].value;
            div.append(span);
            el.append(div);
            let pars = [...par.slice(), span];
            span.pars = pars;
            if (a[i].children.length) {
                let child = document.createElement('div');
                child.classList.add('children');
                div.append(child);
                print(a[i].children, child, val + a[i].value, pars)
            }
        }
    }
}

print(data, root);

root.addEventListener('mouseout', function () {
    titleData[0] && titleData[0].remove();
    [].forEach.call(hoverItems, v => {
        v.classList.remove('hover')
    });
});

root.addEventListener('mouseover', function (e) {
    let el = e.target;
    if (el.tagName != "SPAN") return;
    el.pars.forEach(v => {
        v.classList.add('hover');
    });
    let title = document.createElement('span');
    title.innerText = el.titleData;
    title.classList.add('forTitle');
    el.append(title);
});

