import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
const ContactForm = ({ onSubmit }) => {
    const [form, setForma] = useState({ name: "", email: "", message: "" });
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(form);
        setForma({ name: "", email: "", message: "" });
        navigate("/submittedData");
    };
    return (
        <>
            <div className="container py-5">
                <div className="row align-items-center">
                    <div className="col">
                        <h1 className="h1">If Not Now, When?<br/>Let’s Work Together!</h1>
                        <p className="py-4">Consectetur adipiscing elit, sed do eiusmod tempor ididunt ut<br></br> labore et dolore magna aliqua. Quis ipsum suspendisces<br></br> gravida. Risus commodo viverra.</p>
                        <img src="https://preview.colorlib.com/theme/personalportfolio/assets/img/gallery/sin.png" alt="JohnHancock" />
                    </div>
                    <div className="col">
                        <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: "auto", padding: 20 }}>
                            <h2>Contact Form</h2>
                            <div class="mb-3">
                                <label for="formGroupExampleInput" className="form-label">Name</label>
                                <input name="name" className="form-control" placeholder="Enter name" value={form.name} onChange={e => setForma({ ...form, name: e.target.value })} required />
                            </div>
                            <div class="mb-3">
                                <label for="formGroupExampleInput" className="form-label">Email</label>
                                <input name="email" className="form-control" placeholder="Enter email" value={form.email} onChange={e => setForma({ ...form, email: e.target.value })} required />
                            </div>
                            <div class="mb-3">
                                <label for="formGroupExampleInput" className="form-label">Message</label>
                                <input name="message" className="form-control" placeholder="Enter message" value={form.message} onChange={e => setForma({ ...form, message: e.target.value })} required />
                            </div>
                            <button type="submit" className="text-light px-3 fw-bold btn btn-danger w-100 rounded-0">Send Message</button>
                        </form>
                    </div>

                </div>
            </div>


        </>
    );
}

export default ContactForm;