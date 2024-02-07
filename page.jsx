import React from 'react';
import AddToDo from './AddToDo';
import { ToDoItem } from '@/components/Servers';

const page = () => {
  return (
    <div className='container'>
      <AddToDo />
      <section className="todosContainer">
        <ToDoItem title={'Smaple Titile'} description={'sample description'} id={'sampleId'} completed={false} />
      </section>
    </div>
  )
}

export default page;
