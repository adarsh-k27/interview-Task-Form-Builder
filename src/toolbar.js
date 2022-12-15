export const Items = [{
        key: "Header",
    },
    {
        key: "TextInput",
    },
    {
        key: "TextArea",
    },
    {
        key: "RadioButtons",
    },
    {
        key: "Checkboxes",
    },
    {
        key: "Image",
    },
    {
        group_name: "Multi Column Row",
        key: "TwoColumnRow",
    },
    {
        group_name: "Multi Column Row",
        key: "ThreeColumnRow",
    },
    {
        group_name: "Multi Column Row",
        key: "FourColumnRow",
        element: "MultiColumnRow",
    },
    {
        group_name: "Multi Column Row",
        key: "FiveColumnRow",
        element: "MultiColumnRow",
    },
    {
        group_name: "Multi Column Row",
        key: "SixColumnRow",
        element: "MultiColumnRow",
    },
    {
        group_name: "Custom Element",
        key: "TestComponent",
        element: "CustomElement",
        //component: TestComponent,
        type: "custom",
        field_name: "test_component",
        name: "Something You Want",
        icon: "fa fa-cog",
        static: true,
        props: {
            test: "test_comp",
        },
        label: "Label Test",
    },
    {
        group_name: "Custom Element",
        key: "MyInput",
        element: "CustomElement",
        //component: MyInput,
        type: "custom",
        forwardRef: true,
        bare: true,
        field_name: "my_input_",
        name: "My Input",
        icon: "fa fa-cog",
        props: {
            test: "test_input",
        },
        label: "Label Input",
    },
];