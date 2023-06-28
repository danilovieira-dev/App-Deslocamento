'use client'

import DashBoard from '../../components/layout'
import NextLink from 'next/link';
import ConsultaCliente from '@/components/ConsultaCliente';


export default function Clientes(){
    return (
        <DashBoard>
            
            <NextLink href="/clientes/cadastro" passHref>
               Cadastro de Clientes
            </NextLink>
            <ConsultaCliente/>
        </DashBoard>
    )
}