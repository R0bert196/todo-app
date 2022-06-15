import MaterialIcon from 'react-google-material-icons';

function Task({ type, name, limitDate, estimatedTime }) {
  return (
    <div className='flex gap-2 mt-4 relative bg-green-300 h-16 justify-center items-center'>
          <div className='bg-gray-100 text-green-300 rounded-br-md absolute top-0 left-0'><p>Hobby</p></div> 
        <div className='flex mt-2'>
            <div className='w-56 text-center h-2/4'>
                <p>Numele ar putea fi mai lung</p>
            </div>
            <div className='border-l pl-1 w-28 text-center h-2/4'>
                <p>27-06-2022</p>
            </div>
            <div className='border-l pl-1 w-32 text-center h-2/4'>
                <p>3 zile estimate</p>
            </div>
            <div className='border-l pl-1 w-28 text-center h-2/4'>
                <p>4 zile ramase</p> 
            </div>
            <div className='border-l pl-1 h-2/4'>
                <MaterialIcon icon="done" size='medium' /> 
                <MaterialIcon icon="delete" size='medium' />
            </div>
        </div>
        
    </div>
  )
}

export default Task