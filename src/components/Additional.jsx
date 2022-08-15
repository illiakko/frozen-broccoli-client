import React from 'react';

function Additional(props) {
    return (
        <div className='section'>
            <div>
                <p>Additional</p>
            </div>

            <div className='flex gap-4'>
                <div className='sectionInner'>
                    <p className='text-sm text-center' >Lights</p>
                    <label className='flex my-3'>
                        <p className='w-44'>Lights total:</p>
                        <input type="text" className='w-12' />
                        <p className='mx-3'>W</p>
                    </label>
                    <label className='flex my-3'>
                        <p className='w-44'>Lights time:</p>
                        <input type="text" className='w-12' />
                        <p className='mx-3'>h/day</p>
                    </label>
                    <p className='border-t-solid border-t-[1px] pt-3 border-t-slate-300'>Result, kW</p>
                </div>
                <div className='sectionInner'>
                    <p className='text-sm text-center' >Fans</p>
                    <label className='flex my-3'>
                        <p className='w-44'>Fans number:</p>
                        <input type="text" className='w-12' />
                    </label>
                    <label className='flex my-3'>
                        <p className='w-44'>Power per fan:</p>
                        <input type="text" className='w-12' />
                        <p className='mx-3'>W</p>
                    </label>
                    <p className='border-t-solid border-t-[1px] pt-3 border-t-slate-300'>Result, kW</p>
                </div>
                <div className='sectionInner'>
                    <p className='text-sm text-center' >People</p>
                    <label className='flex my-3'>
                        <p className='w-44'>People number:</p>
                        <input type="text" className='w-12' />
                        <p className='mx-3'>h/day</p>
                    </label>
                    <label className='flex my-3'>
                        <p className='w-44'>Time per worker:</p>
                        <input type="text" className='w-12' />
                        <p className='mx-3'>h/day</p>
                    </label>
                    <p className='border-t-solid border-t-[1px] pt-3 border-t-slate-300'>Result, kW</p>
                </div>
                <div className='sectionInner'>
                    <p className='text-sm text-center' >Other</p>
                    <label className='flex my-3'>
                        <p className='w-44'>Other:</p>
                        <input type="text" className='w-12' />
                        <p className='mx-3'>W</p>
                    </label>
                    <label className='flex my-3'>
                        <p className='w-44'>Other working time:</p>
                        <input type="text" className='w-12' />
                        <p className='mx-3'>h/day</p>
                    </label>
                    <p className='border-t-solid border-t-[1px] pt-3 border-t-slate-300'>Result, kW</p>
                </div>
            </div>
        </div>
    );
}

export default Additional;