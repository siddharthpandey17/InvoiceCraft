// InvoiceCraft JavaScript practice — complete the TODOs below.
const itemsList = document.getElementById('itemsList');
const money = n => '₹' + Number(n || 0).toLocaleString('en-IN', {maximumFractionDigits:2});

// TODO 1: Return an array of objects from .item-row elements.
// Each object: {description, quantity, rate, amount}.
function getItems(){ return []; }

// TODO 2: Calculate subtotal, tax, discount and total.
// total = subtotal + tax - discount.
function calculateTotals(items){ return {subtotal:0,tax:0,discount:0,total:0}; }

// TODO 3: Update row amounts and render preview table using DOM methods.
function renderItems(items){}

// TODO 4: Copy editor values into preview and update totals.
function updatePreview(){
  const items=getItems();
  const totals=calculateTotals(items);
  renderItems(items);
}

// TODO 5: Add a new editable line item when the button is clicked.
document.getElementById('addItem').addEventListener('click',()=>{});

// TODO 6: Use event delegation so all editor inputs update the preview live.
document.querySelector('.editor').addEventListener('input',()=>{});

// TODO 7: Remove a row when its × button is clicked.
// Do not allow deleting the final remaining row.
itemsList.addEventListener('click',event=>{});

// TODO 8: Open the browser print dialog for exporting the invoice.
document.getElementById('printBtn').addEventListener('click',()=>{});

updatePreview();
