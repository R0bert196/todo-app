import MaterialIcon from 'react-google-material-icons';

function Task({ type, name, limitDate, estimatedTime }) {

    const TODAY = new Date();
    var diffDays = parseInt((new Date(limitDate) - TODAY) / (1000 * 60 * 60 * 24), 10); 

  return (
    <div className='flex gap-2 mt-4 relative bg-green-300 h-16 justify-center items-center'>
          <div className='bg-gray-100 text-green-300 rounded-br-md absolute top-0 left-0'><p>{type}</p></div> 
        <div className='flex mt-2'>
            <div className='w-56 text-center h-2/4'>
                  <p>{name}</p>
            </div>
            <div className='border-l pl-1 w-28 text-center h-2/4'>
                  <p>{ limitDate }</p>
            </div>
            <div className='border-l pl-1 w-32 text-center h-2/4'>
                  <p>{ estimatedTime}</p>
            </div>
            <div className='border-l pl-1 w-28 text-center h-2/4'>
                  <p>{ diffDays }</p> 
            </div>
              <div className='border-l pl-1 h-2/4 flex gap-2'>
                <span className='cursor-pointer'><MaterialIcon icon="done" size='large' /></span>
                <span className='cursor-pointer'><MaterialIcon icon="delete" size='large' /></span>
            </div>
        </div>
        
    </div>
  )
}

export default Task