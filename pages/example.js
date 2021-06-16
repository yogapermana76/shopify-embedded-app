import React from 'react';
import { Card, Layout, Page } from '@shopify/polaris';

class Example extends React.Component {
  state = { open: false };
  render() {
    return (
      <Page>
        <Layout>
          <Layout.AnnotatedSection
            title="Example page"
            description="This is just an example page"
          >
            <Card>
              <div>
                Example page
              </div>
            </Card>
          </Layout.AnnotatedSection>
        </Layout>
      </Page>
    )
  }
}

export default Example