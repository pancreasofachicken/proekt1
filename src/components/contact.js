import { useState } from 'react';

const Contact = () => {
     const [form, setForm] = useState({
    firstName: 'Enter name',
    lastName: 'Enter lastname',
    email: 'bhepworth@portfolio.com',
  });
  function Dodaj(){

  }
    return ( 
  //   <div>
  //       <h1>Contact</h1>
  //       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque natus quasi, deleniti neque minus ad amet pariatur cumque. Accusamus id rerum laboriosam perspiciatis doloremque repellat consequatur at ratione qui dignissimos!</p>
  //       <div className="row">
  //           <div className="text">
  //               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa sapiente, asperiores sed beatae quibusdam quas vel neque, nulla quisquam corrupti omnis nihil saepe praesentium natus ea dolores ut provident ipsam!</p>
  //           </div>
  //           <div>
  //               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14548.857258091388!2d21.17966245539911!3d41.002556674432675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135732216a71759b%3A0x662ec9ae335145f2!2sPelister!5e1!3m2!1sen!2smk!4v1751557155237!5m2!1sen!2smk" width={600} height={250} ></iframe>
  //           </div>
  //       </div>
  //       <div>
 
  //     <label>
  //       First name:
  //       <input
  //         value={form.firstName}
  //         onChange={e => {
  //           setForm({
  //             ...form,
  //             firstName: e.target.value
  //           });
  //         }}
  //       />
  //     </label>
  //     <label>
  //       Last name:
  //       <input
  //         value={form.lastName}
  //         onChange={e => {
  //           setForm({
  //             ...form,
  //             lastName: e.target.value
  //           });
  //         }}
  //       />
  //     </label>
  //     <label>
  //       Email:
  //       <input
  //         value={form.email}
  //         onChange={e => {
  //           setForm({
  //             ...form,
  //             email: e.target.value
  //           });
  //         }}
  //       />
  //     </label>
  //     <button onClick={Dodaj()}>Add in table</button>
  //     <p>
  //       {form.firstName}{' '}
  //       {form.lastName}{' '}
  //       ({form.email})
  // </p>
  //       </div>
  //   </div>
     <div className="container py-5">
                <div className="row align-items-center">
                    <div className="col">
                        <h1 className="h1">If Not Now, When?<br/>Let’s Work Together!</h1>
                        <p className="py-4">Consectetur adipiscing elit, sed do eiusmod tempor ididunt ut<br></br> labore et dolore magna aliqua. Quis ipsum suspendisces<br></br> gravida. Risus commodo viverra.</p>
                        <img src="https://preview.colorlib.com/theme/personalportfolio/assets/img/gallery/sin.png" alt="JohnHancock" />
                    </div>
                    <div className="col">
                        <form  style={{ maxWidth: 400, margin: "auto", padding: 20 }}>
                            <h2>Contact Form</h2>
                            <div class="mb-3">
                                <label for="formGroupExampleInput" className="form-label">Name</label>
                                <input name="name" className="form-control" placeholder="Enter name" required />
                            </div>
                            <div class="mb-3">
                                <label for="formGroupExampleInput" className="form-label">Email</label>
                                <input name="email" className="form-control" placeholder="Enter email"  required />
                            </div>
                            <div class="mb-3">
                                <label for="formGroupExampleInput" className="form-label">Message</label>
                                <input name="message" className="form-control" placeholder="Enter message" required />
                            </div>
                            <button type="submit" className="text-light px-3 fw-bold btn btn-danger w-100 rounded-0">Send Message</button>
                        </form>
                    </div>

                </div>
            </div>
);
}
 
export default Contact;