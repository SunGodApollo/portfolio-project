import "./SkillBarStyles.css"

const SkillBar = () => {

    const skills = [

        { name: 'HTML', percentage: 80 },
        { name: 'CSS', percentage: 75 },
        { name: 'JavaScript', percentage: 90 },
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