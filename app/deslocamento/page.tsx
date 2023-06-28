'use client'

import DashBoard from '../../components/layout'
import ConsultaDeslocamento from '@/components/ConsultaDeslocamento'

export default function Deslocamento(){
    return (
        <DashBoard>
            <a href="/deslocamento/iniciar">Iniciar Deslocamento</a>
            <ConsultaDeslocamento/>
        </DashBoard>
    )
}