
import './Form.css'
const Form = () =>
{
    return (
        <form>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 pt-20'>

                <input
                    type="name"
                    name="name"
                    class="name-field"
                    id="name"
                    placeholder="Name Here*"
                    autoComplete='off'
                     />


                <input
                    
                    name="email"
                    class='email'
                    id="email"
                    placeholder="Email Here*"
                    required />
                <input
                    type="msg"
                    name="msg"
                    class='msg'
                    id="email"
                    placeholder="Message Here*"
                    />
            
</div>
        </form>
    );
};

export default Form;