import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "./ui/accordion"
  
  const AccordionDemo = () =>{
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>SOAP</AccordionTrigger>
          <AccordionContent>
            My role involves designing, developing, and testing services based on REST API and SOAP specifications, using IIB as the integration platform. I utilize YAML and XML files for defining integration configurations, allowing for swift and effective changes throughout the development process.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>MQ</AccordionTrigger>
          <AccordionContent>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>REST AIP</AccordionTrigger>
          <AccordionContent>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>HTTP/S</AccordionTrigger>
          <AccordionContent>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  export default AccordionDemo;