import MaterialIcon from 'react-google-material-icons';

function SortingButtonComponent() {
  return (
      <div>
          <div className='text-right'>  
              <h3 className='inline'>Sort By Date</h3>
              <MaterialIcon icon="chevron_right" size='medium' />
          </div>
    </div>
  )
}

export default SortingButtonComponent;