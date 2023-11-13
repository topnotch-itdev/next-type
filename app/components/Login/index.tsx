import { Box, Button, FormControl, FormErrorMessage, FormLabel, Grid, GridItem, Heading, Image, Input, Text } from "@chakra-ui/react";
import { Formik, Field, Form } from "formik";

export default function LoginForm({ title }: { title: string }) {
  function validateName(value: any) {
    let error
    if (!value) {
      error = 'Name is required'
    }
    return error
  }

  return (
    <Formik
      initialValues={{ name: '' }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          actions.setSubmitting(false)
        }, 1000)
      }}
    >
      {(props) => (
        <Form>
          <Field name='name' validate={validateName}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                <FormLabel>Email</FormLabel>
                <Input {...field} placeholder='Email' />
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name='name' validate={validateName}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                <FormLabel>Password</FormLabel>
                <Input {...field} type="password" />
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Button
            mt={4}
            colorScheme='teal'
            isLoading={props.isSubmitting}
            type='submit'
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  )

}