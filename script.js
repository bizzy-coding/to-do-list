//selectors 

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const todoCont = document.querySelector('.todo-container');


//event listeners

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);


//functions

function addTodo(event) {
    event.preventDefault();
    console.log('hello')
    //todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
     //create li
     const newTodo = document.createElement('li');
     newTodo.innerText = todoInput.value;
     newTodo.classList.add('todo-item');
     todoDiv.appendChild(newTodo);
    //check mark button
    const todoButton = document.createElement('button');
    todoButton.classList.add('unchecked-box')
//     todoButton.innerHTML= `<svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23">
//     <g id="Checkbox_inactive" data-name="Checkbox inactive" fill="none" stroke="#e0afff" stroke-width="1">
//       <rect width="23" height="23" rx="4" stroke="none"/>
//       <rect x="0.5" y="0.5" width="22" height="22" rx="3.5" fill="none"/>
//     </g>
//   </svg>
//   `;
//   todoButton.classList.add('complete-btn')
    todoDiv.insertBefore(todoButton, todoDiv.children[0]);
   

//check trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML= `<svg xmlns="http://www.w3.org/2000/svg" width="13.81" height="13.81" viewBox="0 0 13.81 13.81">
    <path id="Cross" d="M13.326,98.283a1.382,1.382,0,0,0-1.954-1.954L6.83,100.876,2.283,96.334A1.382,1.382,0,0,0,.329,98.288l4.546,4.542L.334,107.376a1.382,1.382,0,1,0,1.954,1.954l4.542-4.546,4.546,4.542a1.382,1.382,0,0,0,1.954-1.954L8.784,102.83Z" transform="translate(0.075 -95.925)" fill="#3d3e40"/>
  </svg>
  `;
    trashButton.classList.add('trash-btn')
    todoDiv.appendChild(trashButton);

    //append to list
    todoList.appendChild(todoDiv);

    //clear todo input value

    todoInput.value = "";
};



function deleteCheck(e) {
//console.log(e.target)
const item = e.target;
//delete to do 
if(item.classList[0] === 'trash-btn') {
    const todo = item.parentElement;
    //annimaytion
    todo.classList.add('fall');
    todo.addEventListener('transitionend', function() {
        todo.remove();
    });
   
}
// check mark 
if(item.classList[0] === 'unchecked-box') {
    item.classList.remove('unchecked-box')
    item.classList.toggle("checked-box");
    const todo = item.parentElement;
    
    todoCont.appendChild(todo);
}
}


document.querySelector('.footer').insertAdjacentHTML('afterbegin', `
<a href="home.html"><svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.4375 24.75H8.53125V15.375H17.4687V24.75H23.5625V10.125L13 2.8125L2.4375 10.125V24.75ZM0 27V9L13 0L26 9V27H15.0312V17.625H10.9687V27H0Z" fill="black"/>
        </svg>
        </a>

        <a href="to-dont.html"><svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="13" cy="13" r="12" stroke="black" stroke-width="2"/>
            <rect x="3.4801" y="6.37512" width="23.075" height="2.15863" transform="rotate(33.935 3.4801 6.37512)" fill="black"/>
            </svg>
            </a>

            <a href="index.html"><svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.9838 26C11.1444 26 9.43487 25.6696 7.85518 25.0087C6.27549 24.3479 4.90137 23.4325 3.73283 22.2625C2.56429 21.0925 1.65002 19.7167 0.990013 18.135C0.330004 16.5533 0 14.8417 0 13C0 11.18 0.330004 9.47917 0.990013 7.8975C1.65002 6.31583 2.56429 4.94 3.73283 3.77C4.90137 2.6 6.27549 1.67917 7.85518 1.0075C9.43487 0.335833 11.1444 0 12.9838 0C14.6067 0 16.1215 0.26 17.5281 0.78C18.9347 1.3 20.2006 2.015 21.3258 2.925L19.9301 4.3225C18.9779 3.56417 17.9176 2.97917 16.7491 2.5675C15.5805 2.15583 14.3254 1.95 12.9838 1.95C9.84603 1.95 7.22222 3.00625 5.11236 5.11875C3.0025 7.23125 1.94757 9.85833 1.94757 13C1.94757 16.1417 3.0025 18.7687 5.11236 20.8812C7.22222 22.9937 9.84603 24.05 12.9838 24.05C16.1215 24.05 18.7453 22.9937 20.8552 20.8812C22.965 18.7687 24.02 16.1417 24.02 13C24.02 12.35 23.9713 11.7163 23.8739 11.0988C23.7765 10.4813 23.6305 9.88 23.4357 9.295L24.9288 7.8C25.2751 8.60167 25.5347 9.43583 25.7079 10.3025C25.881 11.1692 25.9675 12.0683 25.9675 13C25.9675 14.8417 25.6321 16.5533 24.9613 18.135C24.2905 19.7167 23.3708 21.0925 22.2022 22.2625C21.0337 23.4325 19.6596 24.3479 18.0799 25.0087C16.5002 25.6696 14.8015 26 12.9838 26ZM11.0687 18.915L5.71286 13.52L7.17353 12.0575L11.0687 15.9575L24.5069 2.5025L26 3.965L11.0687 18.915Z" fill="black"/>
                </svg>
                </a>

                <a href="faq.html">
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.13 20.5725C13.4767 20.5725 13.7692 20.4533 14.0075 20.215C14.2458 19.9767 14.365 19.6842 14.365 19.3375C14.365 18.9908 14.2458 18.6983 14.0075 18.46C13.7692 18.2217 13.4767 18.1025 13.13 18.1025C12.7833 18.1025 12.4908 18.2217 12.2525 18.46C12.0142 18.6983 11.895 18.9908 11.895 19.3375C11.895 19.6842 12.0142 19.9767 12.2525 20.215C12.4908 20.4533 12.7833 20.5725 13.13 20.5725ZM11.9925 15.8275H13.91C13.91 15.2642 13.9804 14.7496 14.1212 14.2837C14.2621 13.8179 14.7008 13.2817 15.4375 12.675C16.1092 12.1117 16.5858 11.5592 16.8675 11.0175C17.1492 10.4758 17.29 9.88 17.29 9.23C17.29 8.08167 16.9162 7.16083 16.1687 6.4675C15.4212 5.77417 14.43 5.4275 13.195 5.4275C12.1333 5.4275 11.1962 5.69292 10.3837 6.22375C9.57125 6.75458 8.98083 7.48583 8.6125 8.4175L10.335 9.0675C10.5733 8.46083 10.9308 7.98958 11.4075 7.65375C11.8842 7.31792 12.4475 7.15 13.0975 7.15C13.8342 7.15 14.43 7.35042 14.885 7.75125C15.34 8.15208 15.5675 8.66667 15.5675 9.295C15.5675 9.77167 15.4267 10.2212 15.145 10.6437C14.8633 11.0662 14.4517 11.505 13.91 11.96C13.26 12.5233 12.7779 13.0812 12.4637 13.6337C12.1496 14.1862 11.9925 14.9175 11.9925 15.8275V15.8275ZM13 26C11.2233 26 9.54417 25.6587 7.9625 24.9762C6.38083 24.2937 4.99958 23.3621 3.81875 22.1812C2.63792 21.0004 1.70625 19.6192 1.02375 18.0375C0.34125 16.4558 0 14.7767 0 13C0 11.2017 0.34125 9.51167 1.02375 7.93C1.70625 6.34833 2.63792 4.9725 3.81875 3.8025C4.99958 2.6325 6.38083 1.70625 7.9625 1.02375C9.54417 0.34125 11.2233 0 13 0C14.7983 0 16.4883 0.34125 18.07 1.02375C19.6517 1.70625 21.0275 2.6325 22.1975 3.8025C23.3675 4.9725 24.2937 6.34833 24.9762 7.93C25.6587 9.51167 26 11.2017 26 13C26 14.7767 25.6587 16.4558 24.9762 18.0375C24.2937 19.6192 23.3675 21.0004 22.1975 22.1812C21.0275 23.3621 19.6517 24.2937 18.07 24.9762C16.4883 25.6587 14.7983 26 13 26ZM13 24.05C16.0767 24.05 18.6875 22.9721 20.8325 20.8163C22.9775 18.6604 24.05 16.055 24.05 13C24.05 9.92333 22.9775 7.3125 20.8325 5.1675C18.6875 3.0225 16.0767 1.95 13 1.95C9.945 1.95 7.33958 3.0225 5.18375 5.1675C3.02792 7.3125 1.95 9.92333 1.95 13C1.95 16.055 3.02792 18.6604 5.18375 20.8163C7.33958 22.9721 9.945 24.05 13 24.05Z" fill="black"/>
                        </svg>
                        
                    </a>`);