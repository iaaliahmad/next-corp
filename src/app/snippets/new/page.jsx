import React from 'react'

export default function SnippetCreatePage() {
    return (
        <>
            <form action="">
                <h3 className='font-bold m-3'>Create a snippet</h3>
                <div className='flex flex-col gap-4'>
                    <div className='flex gap-4'>
                        <label htmlFor="title" className='w-12'>Title</label>
                        <input type="text" name="title" id="title" className='border rounded p-2 w-full' />
                    </div>
                    <div className='flex gap-4'>
                        <label htmlFor="code" className='w-12'>Code</label>
                        <textarea type="text" name="code" id="code" className='border rounded p-2 w-full' />
                    </div>

                    <button type='submit' className='rounded p-2  bg-blue-200'>Create</button>
                </div>
            </form>
        </>
    )
}
