import { Slider } from "@mui/material";
import Stack from '@mui/material/Stack';

const Service = ({service}) => {
    return (
        <div className="card card-side shadow-xl pl-8">
  <div className="">
  <figure className="mb-2 w-10"><img src={service.img} alt="Movie"/>
  
  </figure>
  <Stack className="ml-1.5 mb-3" sx={{ height: 55 }} spacing={1} direction="row">
      
      <Slider
        aria-label="Temperature"
        orientation="vertical"
        defaultValue={1}
        valueLabelDisplay="auto"
        disabled
      />
      
    </Stack>
  </div>
  <div className=" card pl-2 ">
    <h2 className="card-title">{service.name}</h2>
    <p>Click the button to watch on Jetflix app.Click the button to watch on.Click the button to watch on </p>
    
  </div>
</div>
    );
};

export default Service;