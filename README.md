# AngularMaterialTableApp

## Setup Project

```

Step 1 – Create Angular App

# Install NG CLI
npm install -g @angular/cli

#Update NG CLI
ng update

ng new angular-material-table-app

cd angular-material-table-app

Install Material Library


Step 2 – Install Material Library

ng add @angular/material

# ? Choose a prebuilt theme name, or "custom" for a custom theme: Indigo/Pink
# ? Set up global Angular Material typography styles? No  
# ? Set up browser animations for Angular Material? Yes


Step 3 – Import Material Modules in AppModule

see app.module.ts

http://localhost:4200/

```

## Expanding the Project

ng g module inline-datepicker

ng g c inline-datepicker/inline-datepicker

ng g module core

ng g c core/components/home

ng g module example
ng g c components/example-home

ng g module sandbox

cd /c/sharing/github/angular-material-app/src/app/sandbox
ng g c components/sandbox-home
ng g module datatable
cd datatable   // /c/sharing/github/angular-material-app/src/app/sandbox/datatable
ng g c components/inline-datepicker


## Trouble Shooting

### Routing, cannot find page

```
    CoreModule,
    ExampleModule,
    SandboxModule,
    AppRoutingModule <---------------------- has to be AFTER all modules!!!

```

### Cannot find module '@angular/material-moment-adapter' or its corresponding type declarations.ts(2307)

Just run this CMD
```
npm i @angular/material-moment-adapter
```
If it shows any error install
```
npm i moment
```

### error TS7053: Element implicitly has an 'any' type because expression of type 'string' can't be used to index type

- if to disable globally

Go to the: tsconfig.json, and set the below options
```
"compilerOptions": {
        "noImplicitAny": false,
}
```

- Other solutions

Below are a few solutions to solve the "TS7053 Element implicitly has an 'any' type" error when accessing properties via array-access.

Original code:
```
const myObj: object = {}
const prop = 'propname'
myObj[prop] = 'string'  // Error!
```

Note: This does not work because the index-signature is still undefined:

```
const myObj: {propname: any} = {}
const prop = 'propname'
myObj[prop] = 'string'  // Error!
```

> Solution 1: Implicit define the index signature
```
const myObj: {[key: string]: any} = {}
const prop = 'propname'
myObj[prop] = 'string'
```
> Solution 2: Use an interface to provide the index signature
```
interface IStringIndex {
    [key: string]: any
}

const myObj: IStringIndex = {}
const prop = 'propname'
myObj[prop] = 'string'
```
> Solution 3: Use an interface and extend the <Record> utility type:
```
interface IStringIndex extends Record<string, any> {}

const myObj: IStringIndex = {}
const prop = 'propname'
myObj[prop] = 'string'
```
> Solution 4: Define a type alias with the index signature
```
type MyObject = {
    [key: string]: any
    propname?: any
}

const myObj: MyObject = {}
const prop = 'propname'
myObj[prop] = 'string'
```
> Solution 5: Combination of an interface to describe the index-signature and a type alias to describe valid properties:
```
interface IStringIndex extends Record<string, any> {}
type MyObject = IStringIndex & {
    propname?: string
}

const myObj: MyObject = {}
const prop = 'propname'
myObj[prop] = 'string'
```
> Solution 6: Define a list of valid (string) property names:
```
type ValidProps = 'propname' | 'value'
interface IStringIndex extends Record<ValidProps, any> {}

const myObj: IStringIndex = {
    propname: 'my prop',
    value: 123
}
const prop = 'propname'
myObj[prop] = 'string'
```

Note: All properties from the ValidProps list must be present when assigning the object!




## Refs:

- https://www.freakyjolly.com/angular-material-table-inline-datepicker-edit-mode-tutorial/

- https://stackoverflow.com/questions/56833469/typescript-error-ts7053-element-implicitly-has-an-any-type





