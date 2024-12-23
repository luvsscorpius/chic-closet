import React from 'react'
import { Create, ImageField, ImageInput, SimpleForm, TextInput } from 'react-admin'

export const ProductCreate = (props) => {
    return (
        <Create {...props}>
            <SimpleForm>
                <TextInput source='nome' label='Nome do produto' />
                <TextInput source='preco' label='Preço do produto' />
                <TextInput source='categoria' label='Categoria do produto' />
                <ImageInput source="image" label="Image" accept="image/*">
                    <ImageField source="src" title="title" />
                </ImageInput>
            </SimpleForm>
        </Create>
    )
}
