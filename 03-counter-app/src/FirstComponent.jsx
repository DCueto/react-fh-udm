import PropTypes from 'prop-types';

export const FirstComponent = ( { title, number, subTitle, name } ) => {

  // if( !title ){
  //   console.error('El title no existe');
  // }

  return (
    <div className='card'>
     <h2>{ title }</h2>
     <h3>{ number * 2 }</h3>
     <h4>{ subTitle }</h4>
     <h5>{ name }</h5>
    </div>
  )
}

FirstComponent.propTypes = {
  title: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  subTitle: PropTypes.string
}

FirstComponent.defaultProps = {
  title: 'No hay título',
  subTitle: 'No hay subtítulo',
  name: 'Daniel Cueto'
}