import React from 'react';
import SpecificEventAdderCard from '../../components/admin/SpecificEventAdderCard';

function SpecificEventAdder() {
    const users = [
        { name: 'kay ghose', email: 'kayghose@example.com', roll: '12345' },
        { name: 'Pradyut Sigha gupta', email: 'pradyutsinghagupta@example.com', roll: '67890' },
        { name: 'sagar mishra', email: 'sagarmishra@example.com', roll: '67890' },
        { name: 'kay ghose', email: 'kayghose@example.com', roll: '12345' },
        { name: 'mahi gupta', email: 'mahigupta@example.com', roll: '67890' },
        { name: 'sagar mishra', email: 'sagarmishra@example.com', roll: '67890' },
        { name: 'kay ghose', email: 'kayghose@example.com', roll: '12345' },
        { name: 'mahi gupta', email: 'mahigupta@example.com', roll: '67890' },
        { name: 'sagar mishra', email: 'sagarmishra@example.com', roll: '67890' },
    ];
    return (
        <div>
           <div className="container mx-auto my-8">
      <h1 className="text-2xl font-bold mb-4">User Information</h1>
      {users.map((user, index) => (
        <SpecificEventAdderCard key={index} {...user}/>
        // <UserCard key={index} {...user} />
      ))}
    </div> 
        </div>
    );
}

export default SpecificEventAdder;