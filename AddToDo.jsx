import React from 'react';

const AddToDo = () => {
  return (
    <div className='login'>
      <section>
        <form>
            <input type="text" name="title" placeholder='Task Title' />
            <input type="text" name="desc" placeholder='Task Description' />
            <button type='submit'>Add Task</button>
        </form>
      </section>
    </div>
  )
}

export default AddToDo;
