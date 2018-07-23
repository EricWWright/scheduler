import React, { Component } from 'react';

import Icon from '../icon';

class LibraryCourse extends Component {
   render() {
     return(
         <div className="library-course">
            <lable className="library-course__title">Problem Solving</lable>
            { Icon('fas fa-check', 'library-course__icon')}
            {/* arrow component */}
            {/* action button component */}
            <div className="library-course__description">
                <label>Course Description</label>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis sem semper, sollicitudin enim sit amet, egestas nunc. Proin lacus lectus, porta a gravida id, varius et tortor. In ac justo eget mauris porta condimentum vehicula at nunc.</p>
            </div>
         </div>
      );
   }
}

export default LibraryCourse;