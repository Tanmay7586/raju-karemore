import React from 'react'; 
import img1 from './assets/img1.png';
import img2 from './assets/img2.png';
import img3 from './assets/img3.png';
import img4 from './assets/img4.png';
import img5 from './assets/img5.png';
import './components/Campaign.css'; // Import your CSS here

const Campaign = () => {
    const campaigns = [
        {
            title: 'MLA Rajubhau Manikraoji Karemore organized a great health camp at Polara.',
            date: '17 Aug, 2024',
            time: '1:00 PM to 6:00 PM',
            location: 'Maharashtra, MP.',
            description: 'M.L.A. Rajubhau Manikraoji Karemore organized a health camp at Polara.',
            image: img1,
        },
        {
            title: 'Health Camp at Zilla Parishad High School and Science Junior College, Vardhadi.',
            date: '16 Aug, 2024',
            time: '1:00 PM to 6:00 PM',
            location: 'Maharashtra, MP.',
            description: 'A successful health camp organized at Zilla Parishad High School.',
            image: img2,
        },
        {
            title: 'Health Camp organized in Local Community Center.',
            date: '18 Aug, 2024',
            time: '1:00 PM to 6:00 PM',
            location: 'Maharashtra, MP.',
            description: 'A health camp to promote wellness in the community.',
            image: img3,
        },
        {
            title: 'Great health camp organized at Social Bhavan.',
            date: '19 Aug, 2024',
            time: '1:00 PM to 6:00 PM',
            location: 'Maharashtra, MP.',
            description: 'Another successful health camp for better health awareness.',
            image: img4,
        },
        {
            title: 'Health Camp at Village XYZ.',
            date: '20 Aug, 2024',
            time: '1:00 PM to 6:00 PM',
            location: 'Maharashtra, MP.',
            description: 'Health awareness camp organized for villagers.',
            image: img5,
        },
    ];

    return (
        <div className="campaign-container">
            <h2 className="campaign-header">Campaign and Programs</h2>
            <p className="campaign-subheader">
                His programs include setting up health camps, supporting local education centers, and providing vocational training to empower underprivileged communities.
            </p>
            {campaigns.map((campaign, index) => (
                <div className={`campaign-block ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
                    <img 
                        src={campaign.image} 
                        alt={campaign.title} 
                        className="campaign-image" 
                    />
                    <div className="campaign-info">
                        <h3 className="campaign-title">{campaign.title}</h3>
                        <p className="campaign-details">
                            <i className="fas fa-calendar-alt"></i> {campaign.date} <br />
                            <i className="fas fa-clock"></i> {campaign.time} <br />
                            <i className="fas fa-map-marker-alt"></i> {campaign.location}
                        </p>
                        <p className="campaign-description">{campaign.description}</p>
                        <button className="view-details-button">View Details</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Campaign;
