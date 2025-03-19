
function createGrid(size)
{
    const container = document.querySelector('.container');
    container.innerHTML = '';
    const squareSize = 960 / size + 'px';
    for(let i = 0;i<size * size;i++)
        {
            const square = document.createElement('div');
            square.classList.add('grid-square');
            square.style.width = squareSize;
            square.style.height = squareSize;
            square.addEventListener('mouseenter',() => {
                square.style.backgroundColor = 'black';
            });
            square.addEventListener('mouseleave',() => {
                square.style.backgroundColor = 'white';
            });
            container.appendChild(square);


        }

}

createGrid(16);

function resetGrid()
{
    let newSize = prompt("请输入新的网格大小（每边格数）：");
    newSize = parseInt(newSize);
    if(!isNaN(newSize) && newSize > 0&& newSize <=100)
    {
        createGrid(newSize);
    }
    else{
        alert("请输入1到100之间的有效数字！");
    }
    
}

createGrid(16);
const btn = document.querySelector("#btn");
btn.addEventListener("click",() => resetGrid());