import React from 'react'
import Search from '../issue/search'
import Count from '../issue/Count'
import Table from '../issue/table'

export default function Issues() {
    return (
        <div>
            <Search/>
            <Count/>
            <Table/>
        </div>
    )
}
