/**
 * This contains the Markdown text for the homepage. 
 * 
 * It's done as a js file rather than raw md so that it will still work if loaded from a file:// url
 * (If index.html is loaded from file:// then Chrome will regard the origin as null and dom.fetch would
 * refuse to access .md file content. Instead, we load it as a script from a script tag)
 */

let text = `
### Lightweight mappings for CBoK, SWEBOK, DSBOK, and Identity Verification

*(Micro edition!)*

This site generates mappings and tabulations of various mappings for our courses. The rationale is described in 

> Billingsley, W. (2022). Lightweight Mapping of Identify Verification Methods and Secondary Course Aspects: “Swiss Cheese” Modelling.
> In S. Wilson, N. Arthars, D.Wardak, P. Yeoman, E. Kalman, & D.Y.T. Liu (Eds.), Reconnecting relationships through technology. 
> *Proceedings of the 39thInternational Conference on Innovation, Practice and Research in the Use of Educational Technologies in Tertiary Education, ASCILITE 2022 in Sydney*: 
> e22199. [https://doi.org/10.14742/apubs.2022.199](https://doi.org/10.14742/apubs.2022.199)

The navigation in the left sidebar provides tables for each course, as well as a short
summary of this information for each unit.

### Minimal repository

This is the minimal repository. (Apart from README, .gitignore, etc) it contains just four files: just HTML to load the site
and the JS definitions of the units and courses you want mapped.

The category definitions (e.g. what is in CBoK) and the rendering framework are loaded from 
http://tweaked.info/lightweight-mappings-site/

Whose source is defined in
https://github.com/tweakedinfo/lightweight-mappings-site

## Editing courses, units, and this page

The site is generated from a minimal amount of additional information about units and courses.
The text of this homepage is set in

* [home.js](home.js)

The bespoke data for this site can be found in:
* [units.js](units.js)
* [courses.js](courses.js)

To edit the tables, edit those files and hit refresh.

The entries in those files are *intentionally sparse* - we are not aiming to reproduce the
course handbook here, only to generate the additional mappings required for ACS.

A small amount of duplication of content is necessary - for instance, the code files need
the pre-requisites (and course structures) in order to generate the tables.

If a unit or a course hasn't loaded, maybe check the console log for errors (F12).
Or, we might not have written it into units.js or courses.js yet.

`

setHomePage(text)