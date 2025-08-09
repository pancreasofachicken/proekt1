const SubmittedData = ({data}) => {
    return ( <div style={{padding:20}}>
        <h2>Submitted data from contact form</h2>
        {data.length===0 ? (
            <p>no submitted data</p>
        ) : (
            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <td>name</td>
                        <td>email</td>
                        <td>message</td>
                    </tr>
                </thead>
                <tbody>
                   { data.map((entry,index) =>(
                        <tr key={index}>
                            <td>{entry.name}</td>
                            <td>{entry.email}</td>
                            <td>{entry.message}</td>
                        </tr>  
                    ))}
                   
                </tbody>
            </table>
        )}
    </div> );
}
 
export default SubmittedData;