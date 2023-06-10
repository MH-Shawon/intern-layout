

const Service = ({service}) => {
    return (
        <div className="card card-side shadow-xl pl-8">
  <figure className="mb-8 w-12"><img src={service.img} alt="Movie"/>
  
  </figure>
  <div className="card-body">
    <h2 className="card-title">{service.name}</h2>
    <p>Click the button to watch on Jetflix app.</p>
    
  </div>
</div>
    );
};

export default Service;