import "./SkillBarStyles.css"

const SkillBar = () => {

    const skills = [

        { name: 'JavaScript', percentage: 90 },
        { name: 'CSS', percentage: 75 },
        { name: 'HTML', percentage: 90 },
        { name: 'Ruby', percentage: 80 },
        { name: 'Ruby on Rails', percentage: 80 },
        { name: 'React', percentage: 85 },
        { name: 'SQL', percentage: 70 },
    ]


    return (

      <div className="skill-bar">
        {skills.map((skill,index) => (
            
            <div key={index}>
                <div 
                className="skill-bar-progress"
                style={{ width: `${skill.percentage}%` }}
                ></div>    

                <div className="skill-bar-label">
                    {skill.name} - {skill.percentage}%
                </div>
             </div>  
        ))}
      </div>

      
    );
  };
  
  
  export default SkillBar;