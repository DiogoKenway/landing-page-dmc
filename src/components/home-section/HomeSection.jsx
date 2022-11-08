import { Section, SectionContent } from '../section/Section'

const HomeSection = props => (
        <Section className={props.className}>
            <SectionContent className={props.contentClassName}
            bgImage={props.bgImage}>

                {props.children}
                
            </SectionContent>
        </Section>
)

export default HomeSection