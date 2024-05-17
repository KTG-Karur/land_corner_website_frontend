import React from 'react';
import Banner from './Banner';
import HorizontalCard from './HorizontalCard';
import PopularDistrict from './PopularDistrict';
import Advertisement from './Advertisement';
import VerticalCard from './VerticalCard';
import TitleCard from './TitleCard';

function Index() {
    return (
        <>
            {/* Banner */}
            <Banner />
            {/* Banner */}
            {/* Top-Category */}
            <HorizontalCard  title={'Top Categories'} shortDesp={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel lobortis justo'} filter={true} colNo={4}/>
            {/* Top-Category */}
            {/* Popular-District */}
            <PopularDistrict />
            {/* Popular-District */}
            {/* Advertisement */}
            <Advertisement/>
            {/* Advertisement */}
            {/* Bank Auction */}
            <VerticalCard title={'Bank Auction'} shortDesp={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel lobortis justo'}/>
            {/* Bank Auction */}
            {/* Lates News */}
            <TitleCard  title={'Latest News'} shortDesp={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel lobortis justo'} type={'News'} colNo={4}/>
            {/* Lates News */}
            {/* Recently Uploaded */}
            <HorizontalCard  title={'Recently Uploaded'} shortDesp={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel lobortis justo'} filter={false} colNo={4}/>
            {/* Recently Uploaded */}
            {/* Advertisement */}
            <Advertisement/>
            {/* Advertisement */}
            {/* Recently Uploaded */}
            <HorizontalCard  title={'Maybe you are interested'} shortDesp={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel lobortis justo'} filter={false} colNo={4}/>
            {/* Recently Uploaded */}
            {/* Advice & Tool */}
            <TitleCard  title={'Advice & Tool'} shortDesp={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel lobortis justo'} type={'Tool'} colNo={3}/>
            {/* Advice & Tool */}
        </>
    )
}

export default Index
