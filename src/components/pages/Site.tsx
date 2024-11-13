import React from 'react';
import Welcome from './Welcome/Welcome';
import Feature from './Feature/Feature';
import Learning from './Learning/Learning';
import WorkShop from './WorkShop/WorkShop';
import Passion from './Passion/Passion';
import Articles from './Articles/Articles';

const Site = () => {
    return (
        <div>
            <Welcome/>
            <Feature/>
            <Learning/>
            <WorkShop/>
            <Passion/>
            <Articles/>
            
        </div>
    );
};

export default Site;