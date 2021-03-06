// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Object Types
import blockContent from './objects/blockContent'
import simplePortableText from './objects/simplePortableText';

// Document Types
import category from './documents/category'
import post from './documents/post';
import author from './documents/author';
import service from './documents/service';
import landingPage from './documents/landing-page';
import callToAction from './documents/call-to-action';
import navItems from './documents/nav-items';
import route from './documents/route';
import footer from './documents/footer';
import socialConnection from './documents/social-connection';
import siteSettings from './documents/siteSettings';


// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    //Singletons
    route,
    landingPage,
    footer,
    callToAction,
    navItems,
    service,
    socialConnection,
    post,
    author,
    category,
    siteSettings,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    simplePortableText,
  ]),
})
