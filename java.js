
const outputDiv = document.getElementById ('output')


const org1_depts = [
    {
      name: 'accounting',
      children: [
        { name: 'accounting payable', children: [] },
        { name: 'accounting receivable', children: [] },
      ],
    },
    {
      name: 'finance',
      children: [],
    },
  ]
  
  const org2_depts = [
    {
      name: 'accounting',
      children: [
        { name: 'accounting payable', children: [] },
        {
          name: 'accounting receivable',
          children: [{ name: 'cash', children: [] }, { name: 'check', children: [] }],
        },
      ],
    },
    {
      name: 'finance',
      children: [{ name: 'investment', children: [] }],
    },
  ]  


function PrintDepts (depts, parent) {
  var ul = document.createElement('ul')
  for(let i = 0; i < depts.length; i++) {
    let item = depts[i]
    var li = document.createElement('li')
    li.innerHTML = item.name
    ul.appendChild(li)

    if(item.children.length) {
      PrintDepts(item.children, li)
    }
  }

  if(parent) {
    parent.appendChild(ul)
  }

  else {
    outputDiv.appendChild(ul)
  }
}

var title1 = document.createElement("h2")
title1.innerHTML = "Organization 1";
outputDiv.appendChild(title1)
PrintDepts(org1_depts)



var title2 = document.createElement("h2")
title2.innerHTML = "Organization 2";
outputDiv.appendChild(title2)
PrintDepts(org2_depts)