import { c as createAstro, b as createComponent, r as renderComponent, e as renderTemplate, u as unescapeHTML, F as Fragment, f as addAttribute, g as renderScript, h as renderHead, i as renderSlot } from '../chunks/astro/server_BicDNenj.mjs';
import 'kleur/colors';
/* empty css                                 */
import { escape } from 'html-escaper';
import { c as getImage } from '../chunks/_astro_assets_DkpBhm4f.mjs';
import { jsxs, jsx, Fragment as Fragment$1 } from 'react/jsx-runtime';
import { useState, useEffect, useRef } from 'react';
import { MdWifi } from 'react-icons/md';
import { FaLink, FaApple, FaGithub, FaLinkedin, FaEnvelope, FaTrophy, FaGraduationCap, FaBriefcase, FaUsers, FaPalette, FaBookOpen, FaCode, FaChevronLeft, FaExternalLinkAlt, FaFolder, FaFile } from 'react-icons/fa';
import { IoClose, IoCellular, IoBatteryHalfOutline, IoSearchSharp, IoHelpCircle, IoSchool, IoBriefcase, IoPerson, IoMail, IoCall, IoDocumentText, IoCodeSlash } from 'react-icons/io5';
import { VscVscode } from 'react-icons/vsc';
import { BsGithub, BsStickyFill, BsFilePdf, BsCalendar, BsSpotify, BsLinkedin } from 'react-icons/bs';
import { RiTerminalFill } from 'react-icons/ri';
import { IoIosCall, IoIosMail } from 'react-icons/io';
export { renderers } from '../renderers.mjs';

const createMetaTag = (attributes) => {
  const attrs = Object.entries(attributes).map(([key, value]) => `${key}="${escape(value)}"`).join(" ");
  return `<meta ${attrs}>`;
};
const createLinkTag = (attributes) => {
  const attrs = Object.entries(attributes).map(([key, value]) => `${key}="${escape(value)}"`).join(" ");
  return `<link ${attrs}>`;
};
const createOpenGraphTag = (property, content) => {
  return createMetaTag({ property: `og:${property}`, content });
};
const buildOpenGraphMediaTags = (mediaType, media) => {
  let tags = "";
  const addTag = (tag) => {
    tags += tag + "\n";
  };
  media.forEach((medium) => {
    addTag(createOpenGraphTag(mediaType, medium.url));
    if (medium.alt) {
      addTag(createOpenGraphTag(`${mediaType}:alt`, medium.alt));
    }
    if (medium.secureUrl) {
      addTag(createOpenGraphTag(`${mediaType}:secure_url`, medium.secureUrl));
    }
    if (medium.type) {
      addTag(createOpenGraphTag(`${mediaType}:type`, medium.type));
    }
    if (medium.width) {
      addTag(createOpenGraphTag(`${mediaType}:width`, medium.width.toString()));
    }
    if (medium.height) {
      addTag(
        createOpenGraphTag(`${mediaType}:height`, medium.height.toString())
      );
    }
  });
  return tags;
};
const buildTags = (config) => {
  let tagsToRender = "";
  const addTag = (tag) => {
    tagsToRender += tag + "\n";
  };
  if (config.title) {
    const formattedTitle = config.titleTemplate ? config.titleTemplate.replace("%s", config.title) : config.title;
    addTag(`<title>${escape(formattedTitle)}</title>`);
  }
  if (config.description) {
    addTag(createMetaTag({ name: "description", content: config.description }));
  }
  let robotsContent = [];
  if (typeof config.noindex !== "undefined") {
    robotsContent.push(config.noindex ? "noindex" : "index");
  }
  if (typeof config.nofollow !== "undefined") {
    robotsContent.push(config.nofollow ? "nofollow" : "follow");
  }
  if (config.robotsProps) {
    const {
      nosnippet,
      maxSnippet,
      maxImagePreview,
      noarchive,
      unavailableAfter,
      noimageindex,
      notranslate
    } = config.robotsProps;
    if (nosnippet) robotsContent.push("nosnippet");
    if (typeof maxSnippet === "number") robotsContent.push(`max-snippet:${maxSnippet}`);
    if (maxImagePreview)
      robotsContent.push(`max-image-preview:${maxImagePreview}`);
    if (noarchive) robotsContent.push("noarchive");
    if (unavailableAfter)
      robotsContent.push(`unavailable_after:${unavailableAfter}`);
    if (noimageindex) robotsContent.push("noimageindex");
    if (notranslate) robotsContent.push("notranslate");
  }
  if (robotsContent.length > 0) {
    addTag(createMetaTag({ name: "robots", content: robotsContent.join(",") }));
  }
  if (config.canonical) {
    addTag(createLinkTag({ rel: "canonical", href: config.canonical }));
  }
  if (config.mobileAlternate) {
    addTag(
      createLinkTag({
        rel: "alternate",
        media: config.mobileAlternate.media,
        href: config.mobileAlternate.href
      })
    );
  }
  if (config.languageAlternates && config.languageAlternates.length > 0) {
    config.languageAlternates.forEach((languageAlternate) => {
      addTag(
        createLinkTag({
          rel: "alternate",
          hreflang: languageAlternate.hreflang,
          href: languageAlternate.href
        })
      );
    });
  }
  if (config.openGraph) {
    const title = config.openGraph?.title || config.title;
    if (title) {
      addTag(createOpenGraphTag("title", title));
    }
    const description = config.openGraph?.description || config.description;
    if (description) {
      addTag(createOpenGraphTag("description", description));
    }
    if (config.openGraph.url) {
      addTag(createOpenGraphTag("url", config.openGraph.url));
    }
    if (config.openGraph.type) {
      addTag(createOpenGraphTag("type", config.openGraph.type));
    }
    if (config.openGraph.images && config.openGraph.images.length) {
      addTag(buildOpenGraphMediaTags("image", config.openGraph.images));
    }
    if (config.openGraph.videos && config.openGraph.videos.length) {
      addTag(buildOpenGraphMediaTags("video", config.openGraph.videos));
    }
    if (config.openGraph.locale) {
      addTag(createOpenGraphTag("locale", config.openGraph.locale));
    }
    if (config.openGraph.site_name) {
      addTag(createOpenGraphTag("site_name", config.openGraph.site_name));
    }
    if (config.openGraph.profile) {
      if (config.openGraph.profile.firstName) {
        addTag(
          createOpenGraphTag(
            "profile:first_name",
            config.openGraph.profile.firstName
          )
        );
      }
      if (config.openGraph.profile.lastName) {
        addTag(
          createOpenGraphTag(
            "profile:last_name",
            config.openGraph.profile.lastName
          )
        );
      }
      if (config.openGraph.profile.username) {
        addTag(
          createOpenGraphTag(
            "profile:username",
            config.openGraph.profile.username
          )
        );
      }
      if (config.openGraph.profile.gender) {
        addTag(
          createOpenGraphTag("profile:gender", config.openGraph.profile.gender)
        );
      }
    }
    if (config.openGraph.book) {
      if (config.openGraph.book.authors && config.openGraph.book.authors.length) {
        config.openGraph.book.authors.forEach((author) => {
          addTag(createOpenGraphTag("book:author", author));
        });
      }
      if (config.openGraph.book.isbn) {
        addTag(createOpenGraphTag("book:isbn", config.openGraph.book.isbn));
      }
      if (config.openGraph.book.releaseDate) {
        addTag(
          createOpenGraphTag(
            "book:release_date",
            config.openGraph.book.releaseDate
          )
        );
      }
      if (config.openGraph.book.tags && config.openGraph.book.tags.length) {
        config.openGraph.book.tags.forEach((tag) => {
          addTag(createOpenGraphTag("book:tag", tag));
        });
      }
    }
    if (config.openGraph.article) {
      if (config.openGraph.article.publishedTime) {
        addTag(
          createOpenGraphTag(
            "article:published_time",
            config.openGraph.article.publishedTime
          )
        );
      }
      if (config.openGraph.article.modifiedTime) {
        addTag(
          createOpenGraphTag(
            "article:modified_time",
            config.openGraph.article.modifiedTime
          )
        );
      }
      if (config.openGraph.article.expirationTime) {
        addTag(
          createOpenGraphTag(
            "article:expiration_time",
            config.openGraph.article.expirationTime
          )
        );
      }
      if (config.openGraph.article.authors && config.openGraph.article.authors.length) {
        config.openGraph.article.authors.forEach((author) => {
          addTag(createOpenGraphTag("article:author", author));
        });
      }
      if (config.openGraph.article.section) {
        addTag(
          createOpenGraphTag(
            "article:section",
            config.openGraph.article.section
          )
        );
      }
      if (config.openGraph.article.tags && config.openGraph.article.tags.length) {
        config.openGraph.article.tags.forEach((tag) => {
          addTag(createOpenGraphTag("article:tag", tag));
        });
      }
    }
    if (config.openGraph.video) {
      if (config.openGraph.video.actors && config.openGraph.video.actors.length) {
        config.openGraph.video.actors.forEach((actor) => {
          addTag(createOpenGraphTag("video:actor", actor.profile));
          if (actor.role) {
            addTag(createOpenGraphTag("video:actor:role", actor.role));
          }
        });
      }
      if (config.openGraph.video.directors && config.openGraph.video.directors.length) {
        config.openGraph.video.directors.forEach((director) => {
          addTag(createOpenGraphTag("video:director", director));
        });
      }
      if (config.openGraph.video.writers && config.openGraph.video.writers.length) {
        config.openGraph.video.writers.forEach((writer) => {
          addTag(createOpenGraphTag("video:writer", writer));
        });
      }
      if (config.openGraph.video.duration) {
        addTag(
          createOpenGraphTag(
            "video:duration",
            config.openGraph.video.duration.toString()
          )
        );
      }
      if (config.openGraph.video.releaseDate) {
        addTag(
          createOpenGraphTag(
            "video:release_date",
            config.openGraph.video.releaseDate
          )
        );
      }
      if (config.openGraph.video.tags && config.openGraph.video.tags.length) {
        config.openGraph.video.tags.forEach((tag) => {
          addTag(createOpenGraphTag("video:tag", tag));
        });
      }
      if (config.openGraph.video.series) {
        addTag(
          createOpenGraphTag("video:series", config.openGraph.video.series)
        );
      }
    }
  }
  if (config.facebook && config.facebook.appId) {
    addTag(
      createMetaTag({ property: "fb:app_id", content: config.facebook.appId })
    );
  }
  if (config.twitter) {
    if (config.twitter.cardType) {
      addTag(
        createMetaTag({
          name: "twitter:card",
          content: config.twitter.cardType
        })
      );
    }
    if (config.twitter.site) {
      addTag(
        createMetaTag({ name: "twitter:site", content: config.twitter.site })
      );
    }
    if (config.twitter.handle) {
      addTag(
        createMetaTag({
          name: "twitter:creator",
          content: config.twitter.handle
        })
      );
    }
  }
  if (config.additionalMetaTags && config.additionalMetaTags.length > 0) {
    config.additionalMetaTags.forEach((metaTag) => {
      const attributes = {
        content: metaTag.content
      };
      if ("name" in metaTag && metaTag.name) {
        attributes.name = metaTag.name;
      } else if ("property" in metaTag && metaTag.property) {
        attributes.property = metaTag.property;
      } else if ("httpEquiv" in metaTag && metaTag.httpEquiv) {
        attributes["http-equiv"] = metaTag.httpEquiv;
      }
      addTag(createMetaTag(attributes));
    });
  }
  if (config.additionalLinkTags && config.additionalLinkTags.length > 0) {
    config.additionalLinkTags.forEach((linkTag) => {
      const attributes = {
        rel: linkTag.rel,
        href: linkTag.href
      };
      if (linkTag.sizes) {
        attributes.sizes = linkTag.sizes;
      }
      if (linkTag.media) {
        attributes.media = linkTag.media;
      }
      if (linkTag.type) {
        attributes.type = linkTag.type;
      }
      if (linkTag.color) {
        attributes.color = linkTag.color;
      }
      if (linkTag.as) {
        attributes.as = linkTag.as;
      }
      if (linkTag.crossOrigin) {
        attributes.crossorigin = linkTag.crossOrigin;
      }
      addTag(createLinkTag(attributes));
    });
  }
  return tagsToRender.trim();
};

const $$Astro$4 = createAstro("https://example.com");
const $$AstroSeo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$AstroSeo;
  const {
    title,
    titleTemplate,
    noindex,
    nofollow,
    robotsProps,
    description,
    canonical,
    mobileAlternate,
    languageAlternates,
    openGraph,
    facebook,
    twitter,
    additionalMetaTags,
    additionalLinkTags
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(buildTags({
    title,
    titleTemplate,
    noindex,
    nofollow,
    robotsProps,
    description,
    canonical,
    mobileAlternate,
    languageAlternates,
    openGraph,
    facebook,
    twitter,
    additionalMetaTags,
    additionalLinkTags
  }))}` })}`;
}, "C:/Users/002/source/repos/portfolio/node_modules/@astrolib/seo/src/AstroSeo.astro", void 0);

const macBackground1 = new Proxy({"src":"/_astro/mac-background1.BN3pAP-K.jpg","width":6016,"height":3384,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/002/source/repos/portfolio/src/assets/images/mac-background1.jpg";
							}
							
							return target[name];
						}
					});

const macBackground3 = new Proxy({"src":"/_astro/mac-background3.D2uWT5Yk.jpg","width":6016,"height":3384,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/002/source/repos/portfolio/src/assets/images/mac-background3.jpg";
							}
							
							return target[name];
						}
					});

const id$8 = "neurospeccompanionmerged";
const title$8 = "NeuroSpecCompanion - A Companion for Neurologically Impaired Patients";
const description$8 = "The system consists of two integrated components: a patient-facing mobile application and a doctor-facing management system. The patient application features four distinct games aimed at measuring various symptoms, while the doctor’s interface facilitates data analysis and patient management. The system adheres to FHIR standards for interoperability and leverages advanced technologies such as machine learning and natural language processing to enhance its functionality.";
const repoUrl$8 = "https://github.com/aabdoo23/NeuroSpecCompanionMerged";
const techStack$8 = ["ASP.NET Core","C#","Entity Framework","SQL Server","Bootstrap","jQuery"];
const structure$8 = /* #__PURE__ */ JSON.parse("{\"root\":\"NeuroSpecCompanionMerged\",\"children\":[{\"name\":\".gitattributes\",\"type\":\"file\"},{\"name\":\".gitignore\",\"type\":\"file\"},{\"name\":\"NeuroSpec.Shared\",\"type\":\"directory\",\"children\":[{\"name\":\"Globals\",\"type\":\"directory\",\"children\":[{\"name\":\"IDGeneration.cs\",\"type\":\"file\"},{\"name\":\"StaticFunctions.cs\",\"type\":\"file\"}]},{\"name\":\"Models\",\"type\":\"directory\",\"children\":[{\"name\":\"ChatBot\",\"type\":\"directory\",\"children\":[{\"name\":\"ChatMessage.cs\",\"type\":\"file\"}]},{\"name\":\"DTO\",\"type\":\"directory\",\"children\":[{\"name\":\"AppointmentType.cs\",\"type\":\"file\"},{\"name\":\"AttendanceRecord.cs\",\"type\":\"file\"},{\"name\":\"BillingRecord.cs\",\"type\":\"file\"},{\"name\":\"BookAppointmentRequest.cs\",\"type\":\"file\"},{\"name\":\"CalendarEvent.cs\",\"type\":\"file\"},{\"name\":\"EvaluationTest.cs\",\"type\":\"file\"},{\"name\":\"EvaluationTestFeedBack.cs\",\"type\":\"file\"},{\"name\":\"Exercise.cs\",\"type\":\"file\"},{\"name\":\"IssueDrug.cs\",\"type\":\"file\"},{\"name\":\"IssueSNOMED.cs\",\"type\":\"file\"},{\"name\":\"MedicalRecord.cs\",\"type\":\"file\"},{\"name\":\"Patient.cs\",\"type\":\"file\"},{\"name\":\"PatientChronic.cs\",\"type\":\"file\"},{\"name\":\"Payment.cs\",\"type\":\"file\"},{\"name\":\"Prescription.cs\",\"type\":\"file\"},{\"name\":\"ScanTest.cs\",\"type\":\"file\"},{\"name\":\"User.cs\",\"type\":\"file\"},{\"name\":\"Visit.cs\",\"type\":\"file\"}]},{\"name\":\"HUB\",\"type\":\"directory\",\"children\":[{\"name\":\"ChatHub.cs\",\"type\":\"file\"}]},{\"name\":\"Ontology\",\"type\":\"directory\",\"children\":[{\"name\":\"DrugOntology.cs\",\"type\":\"file\"},{\"name\":\"SNOMEDOntology.cs\",\"type\":\"file\"}]}]},{\"name\":\"NeuroSpec.Shared.projitems\",\"type\":\"file\"},{\"name\":\"NeuroSpec.Shared.shproj\",\"type\":\"file\"},{\"name\":\"Services\",\"type\":\"directory\",\"children\":[{\"name\":\"DTO_Services\",\"type\":\"directory\",\"children\":[{\"name\":\"AppointmentTypeService.cs\",\"type\":\"file\"},{\"name\":\"AttendanceRecordService.cs\",\"type\":\"file\"},{\"name\":\"BookAppointmentService.cs\",\"type\":\"file\"},{\"name\":\"CalendarEventService.cs\",\"type\":\"file\"},{\"name\":\"EvaluationTestFeedbackService.cs\",\"type\":\"file\"},{\"name\":\"EvaluationTestService.cs\",\"type\":\"file\"},{\"name\":\"IssueDrugService.cs\",\"type\":\"file\"},{\"name\":\"IssueSNOMEDService.cs\",\"type\":\"file\"},{\"name\":\"MedicalRecordService.cs\",\"type\":\"file\"},{\"name\":\"PatientChronicService.cs\",\"type\":\"file\"},{\"name\":\"PatientService.cs\",\"type\":\"file\"},{\"name\":\"PaymentService.cs\",\"type\":\"file\"},{\"name\":\"PrescriptionService.cs\",\"type\":\"file\"},{\"name\":\"ScanTestService.cs\",\"type\":\"file\"},{\"name\":\"UserService.cs\",\"type\":\"file\"},{\"name\":\"VisitService.cs\",\"type\":\"file\"}]},{\"name\":\"Firebase_Service\",\"type\":\"directory\",\"children\":[{\"name\":\"FirebaseService.cs\",\"type\":\"file\"}]},{\"name\":\"OntologyService\",\"type\":\"directory\",\"children\":[{\"name\":\"DrugOntologyService.cs\",\"type\":\"file\"},{\"name\":\"SNOMEDOntologyService.cs\",\"type\":\"file\"}]}]}]},{\"name\":\"NeuroSpecBackend\",\"type\":\"directory\",\"children\":[{\"name\":\".dockerignore\",\"type\":\"file\"},{\"name\":\"NeuroSpecBackend.sln\",\"type\":\"file\"},{\"name\":\"NeuroSpecBackend\",\"type\":\"directory\",\"children\":[{\"name\":\".config\",\"type\":\"directory\",\"children\":[{\"name\":\"dotnet-tools.json\",\"type\":\"file\"}]},{\"name\":\"Controllers\",\"type\":\"directory\",\"children\":[{\"name\":\"AppointmentTypeController.cs\",\"type\":\"file\"},{\"name\":\"AttendanceRecordController.cs\",\"type\":\"file\"},{\"name\":\"AuthController.cs\",\"type\":\"file\"},{\"name\":\"BookAppointmentController.cs\",\"type\":\"file\"},{\"name\":\"CalendarEventController.cs\",\"type\":\"file\"},{\"name\":\"EvaluationTestController.cs\",\"type\":\"file\"},{\"name\":\"EvaluationTestFeedbackController.cs\",\"type\":\"file\"},{\"name\":\"ExerciseController.cs\",\"type\":\"file\"},{\"name\":\"IssueDrugController.cs\",\"type\":\"file\"},{\"name\":\"IssueSNOMEDController.cs\",\"type\":\"file\"},{\"name\":\"MedicalRecordController.cs\",\"type\":\"file\"},{\"name\":\"PatientChronicController.cs\",\"type\":\"file\"},{\"name\":\"PatientController.cs\",\"type\":\"file\"},{\"name\":\"PaymentController.cs\",\"type\":\"file\"},{\"name\":\"PrescriptionController.cs\",\"type\":\"file\"},{\"name\":\"ScanTestController.cs\",\"type\":\"file\"},{\"name\":\"UserController.cs\",\"type\":\"file\"},{\"name\":\"VisitController.cs\",\"type\":\"file\"}]},{\"name\":\"Dockerfile\",\"type\":\"file\"},{\"name\":\"Model\",\"type\":\"directory\",\"children\":[{\"name\":\"FHIRMapper.cs\",\"type\":\"file\"},{\"name\":\"NeuroDbContext.cs\",\"type\":\"file\"}]},{\"name\":\"NeuroSpecBackend.csproj\",\"type\":\"file\"},{\"name\":\"Program.cs\",\"type\":\"file\"},{\"name\":\"Properties\",\"type\":\"directory\",\"children\":[{\"name\":\"launchSettings.json\",\"type\":\"file\"}]},{\"name\":\"Services\",\"type\":\"directory\",\"children\":[{\"name\":\"AuthService.cs\",\"type\":\"file\"},{\"name\":\"PatientValidator.cs\",\"type\":\"file\"}]},{\"name\":\"appsettings.Development.json\",\"type\":\"file\"}]},{\"name\":\"grial-settings.json\",\"type\":\"file\"}]},{\"name\":\"NeuroSpecCompanion.sln\",\"type\":\"file\"},{\"name\":\"NeuroSpecCompanion\",\"type\":\"directory\",\"children\":[{\"name\":\"App.xaml\",\"type\":\"file\"},{\"name\":\"App.xaml.cs\",\"type\":\"file\"},{\"name\":\"AppShell.xaml\",\"type\":\"file\"},{\"name\":\"AppShell.xaml.cs\",\"type\":\"file\"},{\"name\":\"Controls\",\"type\":\"directory\",\"children\":[{\"name\":\"BorderlessEntry.cs\",\"type\":\"file\"}]},{\"name\":\"Converters\",\"type\":\"directory\",\"children\":[{\"name\":\"ColorToBrushConverter.cs\",\"type\":\"file\"}]},{\"name\":\"MauiProgram.cs\",\"type\":\"file\"},{\"name\":\"NeuroSpecCompanion.csproj\",\"type\":\"file\"},{\"name\":\"NewPage1.xaml\",\"type\":\"file\"},{\"name\":\"NewPage1.xaml.cs\",\"type\":\"file\"},{\"name\":\"Platforms\",\"type\":\"directory\",\"children\":[{\"name\":\"Android\",\"type\":\"directory\",\"children\":[{\"name\":\"AndroidManifest.xml\",\"type\":\"file\"},{\"name\":\"CustomShellRender.cs\",\"type\":\"file\"},{\"name\":\"MainActivity.cs\",\"type\":\"file\"},{\"name\":\"MainApplication.cs\",\"type\":\"file\"},{\"name\":\"Resources\",\"type\":\"directory\",\"children\":[{\"name\":\"values\",\"type\":\"directory\",\"children\":[{\"name\":\"attrs.xml\",\"type\":\"file\"},{\"name\":\"colors.xml\",\"type\":\"file\"}]},{\"name\":\"xml\",\"type\":\"directory\",\"children\":[{\"name\":\"network_security_config.xml\",\"type\":\"file\"}]}]}]},{\"name\":\"MacCatalyst\",\"type\":\"directory\",\"children\":[{\"name\":\"AppDelegate.cs\",\"type\":\"file\"},{\"name\":\"Info.plist\",\"type\":\"file\"},{\"name\":\"Program.cs\",\"type\":\"file\"}]},{\"name\":\"Tizen\",\"type\":\"directory\",\"children\":[{\"name\":\"Main.cs\",\"type\":\"file\"},{\"name\":\"tizen-manifest.xml\",\"type\":\"file\"}]},{\"name\":\"Windows\",\"type\":\"directory\",\"children\":[{\"name\":\"App.xaml\",\"type\":\"file\"},{\"name\":\"App.xaml.cs\",\"type\":\"file\"},{\"name\":\"Package.appxmanifest\",\"type\":\"file\"},{\"name\":\"app.manifest\",\"type\":\"file\"}]},{\"name\":\"iOS\",\"type\":\"directory\",\"children\":[{\"name\":\"AppDelegate.cs\",\"type\":\"file\"},{\"name\":\"Info.plist\",\"type\":\"file\"},{\"name\":\"Program.cs\",\"type\":\"file\"}]}]},{\"name\":\"Properties\",\"type\":\"directory\",\"children\":[{\"name\":\"launchSettings.json\",\"type\":\"file\"}]},{\"name\":\"Resources\",\"type\":\"directory\",\"children\":[{\"name\":\"AppIcon\",\"type\":\"directory\",\"children\":[{\"name\":\"appicon.svg\",\"type\":\"file\"},{\"name\":\"appiconfg.svg\",\"type\":\"file\"}]},{\"name\":\"Fonts\",\"type\":\"directory\",\"children\":[{\"name\":\"BarlowBold.otf\",\"type\":\"file\"},{\"name\":\"BarlowMedium.otf\",\"type\":\"file\"},{\"name\":\"BarlowRegular.otf\",\"type\":\"file\"},{\"name\":\"BarlowSemiBold.otf\",\"type\":\"file\"},{\"name\":\"OpenSans-Regular.ttf\",\"type\":\"file\"},{\"name\":\"OpenSans-Semibold.ttf\",\"type\":\"file\"}]},{\"name\":\"Images\",\"type\":\"directory\",\"children\":[{\"name\":\"ContactDoctorPage\",\"type\":\"directory\",\"children\":[{\"name\":\"ambulance.svg\",\"type\":\"file\"},{\"name\":\"call.svg\",\"type\":\"file\"},{\"name\":\"email.svg\",\"type\":\"file\"},{\"name\":\"video.svg\",\"type\":\"file\"}]},{\"name\":\"HomeIcons\",\"type\":\"directory\",\"children\":[{\"name\":\"appoints.svg\",\"type\":\"file\"},{\"name\":\"contact_doctor.svg\",\"type\":\"file\"},{\"name\":\"help.svg\",\"type\":\"file\"},{\"name\":\"pills.svg\",\"type\":\"file\"},{\"name\":\"reminder.svg\",\"type\":\"file\"}]},{\"name\":\"Icons\",\"type\":\"directory\",\"children\":[{\"name\":\"bell_solid.svg\",\"type\":\"file\"},{\"name\":\"calendar_days_solid.svg\",\"type\":\"file\"},{\"name\":\"chart.svg\",\"type\":\"file\"},{\"name\":\"circle_play.svg\",\"type\":\"file\"},{\"name\":\"circle_user_solid.svg\",\"type\":\"file\"},{\"name\":\"clock.svg\",\"type\":\"file\"},{\"name\":\"file_medical.svg\",\"type\":\"file\"},{\"name\":\"file_upload.svg\",\"type\":\"file\"},{\"name\":\"home.svg\",\"type\":\"file\"},{\"name\":\"message.svg\",\"type\":\"file\"},{\"name\":\"notes_medical.svg\",\"type\":\"file\"},{\"name\":\"paper_plane_solid.svg\",\"type\":\"file\"},{\"name\":\"pause.svg\",\"type\":\"file\"},{\"name\":\"rotate.svg\",\"type\":\"file\"},{\"name\":\"stop.svg\",\"type\":\"file\"},{\"name\":\"stopwatch.svg\",\"type\":\"file\"}]},{\"name\":\"MemoryGame\",\"type\":\"directory\",\"children\":[{\"name\":\"1000_F_142520480_cmHPuqiLv2gH5OfeboFRytF2hKrhC6Af.jpg\",\"type\":\"file\"},{\"name\":\"140387-OT87AI-373.jpg\",\"type\":\"file\"},{\"name\":\"52640-O77WQ0.jpg\",\"type\":\"file\"},{\"name\":\"bear.jpg\",\"type\":\"file\"},{\"name\":\"bunny.jpg\",\"type\":\"file\"},{\"name\":\"elephant.jpg\",\"type\":\"file\"},{\"name\":\"fox.jpg\",\"type\":\"file\"},{\"name\":\"lion.jpg\",\"type\":\"file\"},{\"name\":\"moose.jpg\",\"type\":\"file\"},{\"name\":\"owl.jpg\",\"type\":\"file\"},{\"name\":\"parrot.jpg\",\"type\":\"file\"},{\"name\":\"racoon.jpg\",\"type\":\"file\"}]},{\"name\":\"UserProfile\",\"type\":\"directory\",\"children\":[{\"name\":\"camerasolid.svg\",\"type\":\"file\"}]},{\"name\":\"brain.svg\",\"type\":\"file\"},{\"name\":\"brainbad.jpg\",\"type\":\"file\"},{\"name\":\"dotnet_bot.svg\",\"type\":\"file\"},{\"name\":\"dotsmenu.png\",\"type\":\"file\"},{\"name\":\"dotsmore.png\",\"type\":\"file\"},{\"name\":\"downarrow.png\",\"type\":\"file\"},{\"name\":\"downchevron.png\",\"type\":\"file\"},{\"name\":\"envelope.png\",\"type\":\"file\"},{\"name\":\"hotels.png\",\"type\":\"file\"},{\"name\":\"leftchevron.png\",\"type\":\"file\"},{\"name\":\"logout.svg\",\"type\":\"file\"},{\"name\":\"loupe.png\",\"type\":\"file\"},{\"name\":\"menubars.png\",\"type\":\"file\"},{\"name\":\"notification.png\",\"type\":\"file\"},{\"name\":\"pin.png\",\"type\":\"file\"},{\"name\":\"plane.png\",\"type\":\"file\"},{\"name\":\"securitypin.png\",\"type\":\"file\"},{\"name\":\"star.png\",\"type\":\"file\"},{\"name\":\"swaparrows.png\",\"type\":\"file\"},{\"name\":\"ticket.png\",\"type\":\"file\"},{\"name\":\"train.png\",\"type\":\"file\"},{\"name\":\"trembling_hand.jpg\",\"type\":\"file\"},{\"name\":\"user.png\",\"type\":\"file\"},{\"name\":\"vibration.jpg\",\"type\":\"file\"}]},{\"name\":\"Raw\",\"type\":\"directory\",\"children\":[{\"name\":\"AboutAssets.txt\",\"type\":\"file\"}]},{\"name\":\"Splash\",\"type\":\"directory\",\"children\":[{\"name\":\"splash.svg\",\"type\":\"file\"}]},{\"name\":\"Styles\",\"type\":\"directory\",\"children\":[{\"name\":\"Colors.xaml\",\"type\":\"file\"},{\"name\":\"Styles.xaml\",\"type\":\"file\"}]}]},{\"name\":\"Services\",\"type\":\"directory\",\"children\":[{\"name\":\"AuthService.cs\",\"type\":\"file\"},{\"name\":\"ChatbotService.cs\",\"type\":\"file\"},{\"name\":\"LoggedInPatientService.cs\",\"type\":\"file\"},{\"name\":\"OCR_Service\",\"type\":\"directory\",\"children\":[{\"name\":\"IOCRService.cs\",\"type\":\"file\"},{\"name\":\"OCRService.cs\",\"type\":\"file\"},{\"name\":\"tessdata\",\"type\":\"directory\",\"children\":[{\"name\":\"ara.traineddata\",\"type\":\"file\"},{\"name\":\"eng.traineddata\",\"type\":\"file\"}]}]},{\"name\":\"PDF_OCR_Service\",\"type\":\"directory\",\"children\":[{\"name\":\"IPDFOCRService.cs\",\"type\":\"file\"},{\"name\":\"PDFOCRService.cs\",\"type\":\"file\"}]}]},{\"name\":\"ViewModels\",\"type\":\"directory\",\"children\":[{\"name\":\"Base\",\"type\":\"directory\",\"children\":[{\"name\":\"ViewModelBase.cs\",\"type\":\"file\"}]},{\"name\":\"BookAppointmentViewModel.cs\",\"type\":\"file\"},{\"name\":\"ChatBotMainViewModel.cs\",\"type\":\"file\"},{\"name\":\"ChatHomePageViewModel.cs\",\"type\":\"file\"},{\"name\":\"MedicalHistoryViewModel.cs\",\"type\":\"file\"},{\"name\":\"MemoryTestViewModel.cs\",\"type\":\"file\"},{\"name\":\"ViewAllAppointmentsViewModel.cs\",\"type\":\"file\"},{\"name\":\"ViewAppointmentViewModel.cs\",\"type\":\"file\"}]},{\"name\":\"Views\",\"type\":\"directory\",\"children\":[{\"name\":\"BookAppointment\",\"type\":\"directory\",\"children\":[{\"name\":\"BookAppointmentMainPage.xaml\",\"type\":\"file\"},{\"name\":\"BookAppointmentMainPage.xaml.cs\",\"type\":\"file\"},{\"name\":\"ViewAllAppointmentsPage.xaml\",\"type\":\"file\"},{\"name\":\"ViewAllAppointmentsPage.xaml.cs\",\"type\":\"file\"},{\"name\":\"ViewAppointmentPage.xaml\",\"type\":\"file\"},{\"name\":\"ViewAppointmentPage.xaml.cs\",\"type\":\"file\"}]},{\"name\":\"ChatBot\",\"type\":\"directory\",\"children\":[{\"name\":\"ChatBotMainView.xaml\",\"type\":\"file\"},{\"name\":\"ChatBotMainView.xaml.cs\",\"type\":\"file\"},{\"name\":\"ChatHomePage.xaml\",\"type\":\"file\"},{\"name\":\"ChatHomePage.xaml.cs\",\"type\":\"file\"},{\"name\":\"Templates\",\"type\":\"directory\",\"children\":[{\"name\":\"MessageDataTemplateSelector.cs\",\"type\":\"file\"},{\"name\":\"ReceiverChatMessageItemTemplate.xaml\",\"type\":\"file\"},{\"name\":\"ReceiverChatMessageItemTemplate.xaml.cs\",\"type\":\"file\"},{\"name\":\"RecentChatItemTemplate.xaml\",\"type\":\"file\"},{\"name\":\"RecentChatItemTemplate.xaml.cs\",\"type\":\"file\"},{\"name\":\"SenderChatMessageItemTemplate.xaml\",\"type\":\"file\"},{\"name\":\"SenderChatMessageItemTemplate.xaml.cs\",\"type\":\"file\"},{\"name\":\"SuggestedItemTemplate.xaml\",\"type\":\"file\"},{\"name\":\"SuggestedItemTemplate.xaml.cs\",\"type\":\"file\"}]}]},{\"name\":\"CommunityChatPage.xaml\",\"type\":\"file\"},{\"name\":\"CommunityChatPage.xaml.cs\",\"type\":\"file\"},{\"name\":\"HomePage.xaml\",\"type\":\"file\"},{\"name\":\"HomePage.xaml.cs\",\"type\":\"file\"},{\"name\":\"HomePage\",\"type\":\"directory\",\"children\":[{\"name\":\"ContactDoctorPage.xaml\",\"type\":\"file\"},{\"name\":\"ContactDoctorPage.xaml.cs\",\"type\":\"file\"},{\"name\":\"PillsPage.xaml\",\"type\":\"file\"},{\"name\":\"PillsPage.xaml.cs\",\"type\":\"file\"},{\"name\":\"RemindersPage.xaml\",\"type\":\"file\"},{\"name\":\"RemindersPage.xaml.cs\",\"type\":\"file\"}]},{\"name\":\"MainPage.xaml\",\"type\":\"file\"},{\"name\":\"MainPage.xaml.cs\",\"type\":\"file\"},{\"name\":\"MedicalHistory\",\"type\":\"directory\",\"children\":[{\"name\":\"ViewMedicalRecord.xaml\",\"type\":\"file\"},{\"name\":\"ViewMedicalRecord.xaml.cs\",\"type\":\"file\"}]},{\"name\":\"MedicalHistoryPage.xaml\",\"type\":\"file\"},{\"name\":\"MedicalHistoryPage.xaml.cs\",\"type\":\"file\"},{\"name\":\"MemoryTest\",\"type\":\"directory\",\"children\":[{\"name\":\"MemoryGame.xaml\",\"type\":\"file\"},{\"name\":\"MemoryGame.xaml.cs\",\"type\":\"file\"},{\"name\":\"MemoryGameTutorial.xaml\",\"type\":\"file\"},{\"name\":\"MemoryGameTutorial.xaml.cs\",\"type\":\"file\"}]},{\"name\":\"PathGame\",\"type\":\"directory\",\"children\":[{\"name\":\"PathGame.xaml\",\"type\":\"file\"},{\"name\":\"PathGame.xaml.cs\",\"type\":\"file\"}]},{\"name\":\"Prescription\",\"type\":\"directory\",\"children\":[{\"name\":\"ViewAllPrescriptionsPage.xaml\",\"type\":\"file\"},{\"name\":\"ViewAllPrescriptionsPage.xaml.cs\",\"type\":\"file\"}]},{\"name\":\"ProgressTrackerPage.xaml\",\"type\":\"file\"},{\"name\":\"ProgressTrackerPage.xaml.cs\",\"type\":\"file\"},{\"name\":\"RegisterPages\",\"type\":\"directory\",\"children\":[{\"name\":\"RegisterPage.xaml\",\"type\":\"file\"},{\"name\":\"RegisterPage.xaml.cs\",\"type\":\"file\"}]},{\"name\":\"TapTest\",\"type\":\"directory\",\"children\":[{\"name\":\"TapGame.xaml\",\"type\":\"file\"},{\"name\":\"TapGame.xaml.cs\",\"type\":\"file\"},{\"name\":\"TapTutorial.xaml\",\"type\":\"file\"},{\"name\":\"TapTutorial.xaml.cs\",\"type\":\"file\"}]},{\"name\":\"TremorTest\",\"type\":\"directory\",\"children\":[{\"name\":\"TremorTestMainPage.xaml\",\"type\":\"file\"},{\"name\":\"TremorTestMainPage.xaml.cs\",\"type\":\"file\"}]},{\"name\":\"UserProfilePage.xaml\",\"type\":\"file\"},{\"name\":\"UserProfilePage.xaml.cs\",\"type\":\"file\"},{\"name\":\"VibrationTest\",\"type\":\"directory\",\"children\":[{\"name\":\"VibrationTestGamePage.xaml\",\"type\":\"file\"},{\"name\":\"VibrationTestGamePage.xaml.cs\",\"type\":\"file\"}]}]},{\"name\":\"globals.cs\",\"type\":\"file\"}]},{\"name\":\"README.md\",\"type\":\"file\"},{\"name\":\"clinicalMain-neuro\",\"type\":\"directory\",\"children\":[{\"name\":\"README.md\",\"type\":\"file\"},{\"name\":\"clinical.sln\",\"type\":\"file\"},{\"name\":\"clinical\",\"type\":\"directory\",\"children\":[{\"name\":\"App.xaml\",\"type\":\"file\"},{\"name\":\"App.xaml.cs\",\"type\":\"file\"},{\"name\":\"AssemblyInfo.cs\",\"type\":\"file\"},{\"name\":\"MainWindow.xaml\",\"type\":\"file\"},{\"name\":\"MainWindow.xaml.cs\",\"type\":\"file\"},{\"name\":\"Pages\",\"type\":\"directory\",\"children\":[{\"name\":\"CalendarPage.xaml\",\"type\":\"file\"},{\"name\":\"CalendarPage.xaml.cs\",\"type\":\"file\"},{\"name\":\"DashBoardPage.xaml\",\"type\":\"file\"},{\"name\":\"DashBoardPage.xaml.cs\",\"type\":\"file\"},{\"name\":\"PatientSearchPage.xaml\",\"type\":\"file\"},{\"name\":\"PatientSearchPage.xaml.cs\",\"type\":\"file\"},{\"name\":\"PhysioTherapistDashboard.xaml\",\"type\":\"file\"},{\"name\":\"PhysioTherapistDashboard.xaml.cs\",\"type\":\"file\"},{\"name\":\"PrintingPage.xaml\",\"type\":\"file\"},{\"name\":\"PrintingPage.xaml.cs\",\"type\":\"file\"},{\"name\":\"adminDashboardPage.xaml\",\"type\":\"file\"},{\"name\":\"adminDashboardPage.xaml.cs\",\"type\":\"file\"},{\"name\":\"adminSettingsNewPages\",\"type\":\"directory\",\"children\":[{\"name\":\"newAppointmentTypePage.xaml\",\"type\":\"file\"},{\"name\":\"newAppointmentTypePage.xaml.cs\",\"type\":\"file\"}]},{\"name\":\"dicomViewer.xaml\",\"type\":\"file\"},{\"name\":\"dicomViewer.xaml.cs\",\"type\":\"file\"},{\"name\":\"newEmployeePage.xaml\",\"type\":\"file\"},{\"name\":\"newEmployeePage.xaml.cs\",\"type\":\"file\"},{\"name\":\"newPatientForm.xaml\",\"type\":\"file\"},{\"name\":\"newPatientForm.xaml.cs\",\"type\":\"file\"},{\"name\":\"newPatientPage.xaml\",\"type\":\"file\"},{\"name\":\"newPatientPage.xaml.cs\",\"type\":\"file\"},{\"name\":\"newRecordPage.xaml\",\"type\":\"file\"},{\"name\":\"newRecordPage.xaml.cs\",\"type\":\"file\"},{\"name\":\"patientView.xaml\",\"type\":\"file\"},{\"name\":\"patientView.xaml.cs\",\"type\":\"file\"},{\"name\":\"patientViewMainPage.xaml\",\"type\":\"file\"},{\"name\":\"patientViewMainPage.xaml.cs\",\"type\":\"file\"},{\"name\":\"reciptionistPages\",\"type\":\"directory\",\"children\":[{\"name\":\"PendingAppointments.xaml\",\"type\":\"file\"},{\"name\":\"PendingAppointments.xaml.cs\",\"type\":\"file\"},{\"name\":\"ReceptionistDashboard.xaml\",\"type\":\"file\"},{\"name\":\"ReceptionistDashboard.xaml.cs\",\"type\":\"file\"},{\"name\":\"reciptionistViewAppointmentRequestWindow.xaml\",\"type\":\"file\"},{\"name\":\"reciptionistViewAppointmentRequestWindow.xaml.cs\",\"type\":\"file\"},{\"name\":\"reciptionistViewPatient.xaml\",\"type\":\"file\"},{\"name\":\"reciptionistViewPatient.xaml.cs\",\"type\":\"file\"},{\"name\":\"reciptionistViewPhysioTherapist.xaml\",\"type\":\"file\"},{\"name\":\"reciptionistViewPhysioTherapist.xaml.cs\",\"type\":\"file\"},{\"name\":\"reciptionistViewVisit.xaml\",\"type\":\"file\"},{\"name\":\"reciptionistViewVisit.xaml.cs\",\"type\":\"file\"}]},{\"name\":\"viewPhysiotherapist.xaml\",\"type\":\"file\"},{\"name\":\"viewPhysiotherapist.xaml.cs\",\"type\":\"file\"},{\"name\":\"visit.xaml\",\"type\":\"file\"},{\"name\":\"visit.xaml.cs\",\"type\":\"file\"}]},{\"name\":\"clinical.csproj\",\"type\":\"file\"},{\"name\":\"globals.cs\",\"type\":\"file\"},{\"name\":\"images\",\"type\":\"directory\",\"children\":[{\"name\":\"3alolo.png\",\"type\":\"file\"},{\"name\":\"9-Figure3-1.png\",\"type\":\"file\"},{\"name\":\"CR7.png\",\"type\":\"file\"},{\"name\":\"abdelkader.png\",\"type\":\"file\"},{\"name\":\"afsha.png\",\"type\":\"file\"},{\"name\":\"akram tawfik.png\",\"type\":\"file\"},{\"name\":\"batta.png\",\"type\":\"file\"},{\"name\":\"bottomRosheta.jpg\",\"type\":\"file\"},{\"name\":\"dicom.JPG\",\"type\":\"file\"},{\"name\":\"hand.jpg\",\"type\":\"file\"},{\"name\":\"image-00000.dcm\",\"type\":\"file\"},{\"name\":\"kahraba.png\",\"type\":\"file\"},{\"name\":\"messi.png\",\"type\":\"file\"},{\"name\":\"openHand.jpg\",\"type\":\"file\"},{\"name\":\"salah.png\",\"type\":\"file\"},{\"name\":\"shenawi.png\",\"type\":\"file\"},{\"name\":\"topRosheta.jpg\",\"type\":\"file\"},{\"name\":\"xray report.webp\",\"type\":\"file\"}]},{\"name\":\"loginPage.xaml\",\"type\":\"file\"},{\"name\":\"loginPage.xaml.cs\",\"type\":\"file\"},{\"name\":\"newAppointmentWindow.xaml\",\"type\":\"file\"},{\"name\":\"newAppointmentWindow.xaml.cs\",\"type\":\"file\"},{\"name\":\"prescriptionWindow.xaml\",\"type\":\"file\"},{\"name\":\"prescriptionWindow.xaml.cs\",\"type\":\"file\"},{\"name\":\"userControls\",\"type\":\"directory\",\"children\":[{\"name\":\"AccountMenu.xaml\",\"type\":\"file\"},{\"name\":\"AccountMenu.xaml.cs\",\"type\":\"file\"},{\"name\":\"ImageLogo.xaml\",\"type\":\"file\"},{\"name\":\"ImageLogo.xaml.cs\",\"type\":\"file\"},{\"name\":\"Item.xaml\",\"type\":\"file\"},{\"name\":\"Item.xaml.cs\",\"type\":\"file\"},{\"name\":\"MenuButton.xaml\",\"type\":\"file\"},{\"name\":\"MenuButton.xaml.cs\",\"type\":\"file\"},{\"name\":\"MessageChat.xaml\",\"type\":\"file\"},{\"name\":\"MessageChat.xaml.cs\",\"type\":\"file\"},{\"name\":\"MyMessageChat.xaml\",\"type\":\"file\"},{\"name\":\"MyMessageChat.xaml.cs\",\"type\":\"file\"},{\"name\":\"RelayCommand.cs\",\"type\":\"file\"},{\"name\":\"TextInfo.xaml\",\"type\":\"file\"},{\"name\":\"TextInfo.xaml.cs\",\"type\":\"file\"},{\"name\":\"UserChat.xaml\",\"type\":\"file\"},{\"name\":\"UserChat.xaml.cs\",\"type\":\"file\"},{\"name\":\"chatItem.xaml\",\"type\":\"file\"},{\"name\":\"chatItem.xaml.cs\",\"type\":\"file\"},{\"name\":\"chatMenuButton.xaml\",\"type\":\"file\"},{\"name\":\"chatMenuButton.xaml.cs\",\"type\":\"file\"},{\"name\":\"chatSeperator.xaml\",\"type\":\"file\"},{\"name\":\"chatSeperator.xaml.cs\",\"type\":\"file\"},{\"name\":\"dicomUtil\",\"type\":\"directory\",\"children\":[{\"name\":\"ConvertUtil.cs\",\"type\":\"file\"},{\"name\":\"WinAPI.cs\",\"type\":\"file\"}]},{\"name\":\"flyff.xaml\",\"type\":\"file\"},{\"name\":\"flyff.xaml.cs\",\"type\":\"file\"},{\"name\":\"medicalRecordObject.xaml\",\"type\":\"file\"},{\"name\":\"medicalRecordObject.xaml.cs\",\"type\":\"file\"},{\"name\":\"previousVisitObject.xaml\",\"type\":\"file\"},{\"name\":\"previousVisitObject.xaml.cs\",\"type\":\"file\"},{\"name\":\"showBox.xaml\",\"type\":\"file\"},{\"name\":\"showBox.xaml.cs\",\"type\":\"file\"}]},{\"name\":\"viewImage.xaml\",\"type\":\"file\"},{\"name\":\"viewImage.xaml.cs\",\"type\":\"file\"},{\"name\":\"viewUser.xaml\",\"type\":\"file\"},{\"name\":\"viewUser.xaml.cs\",\"type\":\"file\"}]},{\"name\":\"clinicalDB.sql\",\"type\":\"file\"},{\"name\":\"missing project clinical.txt\",\"type\":\"file\"},{\"name\":\"nueroDB.sql\",\"type\":\"file\"}]},{\"name\":\"doc\",\"type\":\"directory\",\"children\":[{\"name\":\"neurospec\",\"type\":\"directory\",\"children\":[{\"name\":\"shared\",\"type\":\"directory\",\"children\":[{\"name\":\"globals\",\"type\":\"directory\",\"children\":[{\"name\":\"IDGeneration.md\",\"type\":\"file\"}]},{\"name\":\"models\",\"type\":\"directory\",\"children\":[{\"name\":\"chatbot\",\"type\":\"directory\",\"children\":[{\"name\":\"ChatMessage.md\",\"type\":\"file\"}]},{\"name\":\"dto\",\"type\":\"directory\",\"children\":[{\"name\":\"Address.md\",\"type\":\"file\"},{\"name\":\"AppointmentType.md\",\"type\":\"file\"},{\"name\":\"Attachment.md\",\"type\":\"file\"},{\"name\":\"AttendanceRecord.md\",\"type\":\"file\"},{\"name\":\"BasicPropertyValue.md\",\"type\":\"file\"},{\"name\":\"BillingRecord.md\",\"type\":\"file\"},{\"name\":\"BookAppointmentRequest.md\",\"type\":\"file\"},{\"name\":\"CalendarEvent.md\",\"type\":\"file\"},{\"name\":\"Definition.md\",\"type\":\"file\"},{\"name\":\"EvaluationTest.md\",\"type\":\"file\"},{\"name\":\"EvaluationTestFeedBack.md\",\"type\":\"file\"},{\"name\":\"Exercise.md\",\"type\":\"file\"},{\"name\":\"Issue.md\",\"type\":\"file\"},{\"name\":\"IssueDrug.md\",\"type\":\"file\"},{\"name\":\"IssueExercise.md\",\"type\":\"file\"},{\"name\":\"IssueTest.md\",\"type\":\"file\"},{\"name\":\"MedicalRecord.md\",\"type\":\"file\"},{\"name\":\"Meta.md\",\"type\":\"file\"},{\"name\":\"OntologyTerm.md\",\"type\":\"file\"},{\"name\":\"Patient.md\",\"type\":\"file\"},{\"name\":\"Payment.md\",\"type\":\"file\"},{\"name\":\"Prescription.md\",\"type\":\"file\"},{\"name\":\"ScanTest.md\",\"type\":\"file\"},{\"name\":\"Synonym.md\",\"type\":\"file\"},{\"name\":\"User.md\",\"type\":\"file\"},{\"name\":\"Visit.md\",\"type\":\"file\"},{\"name\":\"Xref.md\",\"type\":\"file\"}]},{\"name\":\"hub\",\"type\":\"directory\",\"children\":[{\"name\":\"ChatHub.md\",\"type\":\"file\"}]},{\"name\":\"ontology\",\"type\":\"directory\",\"children\":[{\"name\":\"DrugOntology.md\",\"type\":\"file\"}]}]},{\"name\":\"services\",\"type\":\"directory\",\"children\":[{\"name\":\"dto_services\",\"type\":\"directory\",\"children\":[{\"name\":\"BookAppointmentService.md\",\"type\":\"file\"}]},{\"name\":\"firebase_service\",\"type\":\"directory\",\"children\":[{\"name\":\"FirebaseService.md\",\"type\":\"file\"}]},{\"name\":\"ontologyservices\",\"type\":\"directory\",\"children\":[{\"name\":\"DrugOntologyService.md\",\"type\":\"file\"}]}]}]}]},{\"name\":\"neurospeccompanion\",\"type\":\"directory\",\"children\":[{\"name\":\"App.md\",\"type\":\"file\"},{\"name\":\"AppShell.md\",\"type\":\"file\"},{\"name\":\"MainActivity.md\",\"type\":\"file\"},{\"name\":\"MainApplication.md\",\"type\":\"file\"},{\"name\":\"MauiProgram.md\",\"type\":\"file\"},{\"name\":\"Resource.md\",\"type\":\"file\"},{\"name\":\"controls\",\"type\":\"directory\",\"children\":[{\"name\":\"BorderlessEntry.md\",\"type\":\"file\"}]},{\"name\":\"converters\",\"type\":\"directory\",\"children\":[{\"name\":\"ColorToBrushConverter.md\",\"type\":\"file\"}]},{\"name\":\"globals.md\",\"type\":\"file\"},{\"name\":\"platforms\",\"type\":\"directory\",\"children\":[{\"name\":\"android\",\"type\":\"directory\",\"children\":[{\"name\":\"CustomShellRender.md\",\"type\":\"file\"},{\"name\":\"CustomeShellBottomNavViewAppearanceTracker.md\",\"type\":\"file\"}]}]},{\"name\":\"services\",\"type\":\"directory\",\"children\":[{\"name\":\"AuthService.md\",\"type\":\"file\"},{\"name\":\"ChatbotService.md\",\"type\":\"file\"},{\"name\":\"LoggedInPatientService.md\",\"type\":\"file\"},{\"name\":\"ocr_service\",\"type\":\"directory\",\"children\":[{\"name\":\"IOCRService.md\",\"type\":\"file\"},{\"name\":\"OCRService.md\",\"type\":\"file\"}]},{\"name\":\"pdf_ocr_service\",\"type\":\"directory\",\"children\":[{\"name\":\"IPDFOCRService.md\",\"type\":\"file\"},{\"name\":\"PDFOCRService.md\",\"type\":\"file\"}]}]},{\"name\":\"shared\",\"type\":\"directory\",\"children\":[{\"name\":\"services\",\"type\":\"directory\",\"children\":[{\"name\":\"dto_services\",\"type\":\"directory\",\"children\":[{\"name\":\"AppointmentTypeService.md\",\"type\":\"file\"},{\"name\":\"AttendanceRecordService.md\",\"type\":\"file\"},{\"name\":\"CalendarEventService.md\",\"type\":\"file\"},{\"name\":\"EvaluationTestFeedbackService.md\",\"type\":\"file\"},{\"name\":\"EvaluationTestService.md\",\"type\":\"file\"},{\"name\":\"IssueDrugService.md\",\"type\":\"file\"},{\"name\":\"IssueExerciseService.md\",\"type\":\"file\"},{\"name\":\"IssueTestService.md\",\"type\":\"file\"},{\"name\":\"MedicalRecordService.md\",\"type\":\"file\"},{\"name\":\"OntologyTermService.md\",\"type\":\"file\"},{\"name\":\"PatientService.md\",\"type\":\"file\"},{\"name\":\"PaymentService.md\",\"type\":\"file\"},{\"name\":\"PrescriptionService.md\",\"type\":\"file\"},{\"name\":\"ScanTestService.md\",\"type\":\"file\"},{\"name\":\"UserService.md\",\"type\":\"file\"},{\"name\":\"VisitService.md\",\"type\":\"file\"}]}]}]},{\"name\":\"viewmodels\",\"type\":\"directory\",\"children\":[{\"name\":\"BookAppointmentViewModel.md\",\"type\":\"file\"},{\"name\":\"ChatBotMainViewModel.md\",\"type\":\"file\"},{\"name\":\"ChatHomePageViewModel.md\",\"type\":\"file\"},{\"name\":\"MedicalHistoryViewModel.md\",\"type\":\"file\"},{\"name\":\"MemoryTestViewModel.md\",\"type\":\"file\"},{\"name\":\"MessageModel.md\",\"type\":\"file\"},{\"name\":\"ViewAllAppointmentsViewModel.md\",\"type\":\"file\"},{\"name\":\"ViewAppointmentViewModel.md\",\"type\":\"file\"},{\"name\":\"ViewModelBase.md\",\"type\":\"file\"}]},{\"name\":\"views\",\"type\":\"directory\",\"children\":[{\"name\":\"CommunityChatPage.md\",\"type\":\"file\"},{\"name\":\"HomePage.md\",\"type\":\"file\"},{\"name\":\"MainPage.md\",\"type\":\"file\"},{\"name\":\"MedicalHistoryPage.md\",\"type\":\"file\"},{\"name\":\"ProgressTrackerPage.md\",\"type\":\"file\"},{\"name\":\"UserProfilePage.md\",\"type\":\"file\"},{\"name\":\"bookappointment\",\"type\":\"directory\",\"children\":[{\"name\":\"BookAppointmentMainPage.md\",\"type\":\"file\"},{\"name\":\"ViewAllAppointmentsPage.md\",\"type\":\"file\"},{\"name\":\"ViewAppointmentPage.md\",\"type\":\"file\"}]},{\"name\":\"chatbot\",\"type\":\"directory\",\"children\":[{\"name\":\"ChatBotMainView.md\",\"type\":\"file\"},{\"name\":\"ChatHomePage.md\",\"type\":\"file\"},{\"name\":\"templates\",\"type\":\"directory\",\"children\":[{\"name\":\"MessageDataTemplateSelector.md\",\"type\":\"file\"},{\"name\":\"ReceiverChatMessageItemTemplate.md\",\"type\":\"file\"},{\"name\":\"RecentChatItemTemplate.md\",\"type\":\"file\"},{\"name\":\"SenderChatMessageItemTemplate.md\",\"type\":\"file\"},{\"name\":\"SuggestedItemTemplate.md\",\"type\":\"file\"}]}]},{\"name\":\"medicalhistory\",\"type\":\"directory\",\"children\":[{\"name\":\"ViewMedicalRecord.md\",\"type\":\"file\"}]},{\"name\":\"memorytest\",\"type\":\"directory\",\"children\":[{\"name\":\"Coordinates.md\",\"type\":\"file\"},{\"name\":\"MemoryGame.md\",\"type\":\"file\"},{\"name\":\"MemoryGameTutorial.md\",\"type\":\"file\"},{\"name\":\"Pair.md\",\"type\":\"file\"},{\"name\":\"ScorePoint.md\",\"type\":\"file\"}]},{\"name\":\"prescription\",\"type\":\"directory\",\"children\":[{\"name\":\"ViewAllPrescriptionsPage.md\",\"type\":\"file\"}]},{\"name\":\"registerpages\",\"type\":\"directory\",\"children\":[{\"name\":\"RegisterPage.md\",\"type\":\"file\"}]},{\"name\":\"taptest\",\"type\":\"directory\",\"children\":[{\"name\":\"Point.md\",\"type\":\"file\"},{\"name\":\"TapGame.md\",\"type\":\"file\"},{\"name\":\"TapTutorial.md\",\"type\":\"file\"}]},{\"name\":\"tremortest\",\"type\":\"directory\",\"children\":[{\"name\":\"TremorTestMainPage.md\",\"type\":\"file\"}]},{\"name\":\"vibrationtest\",\"type\":\"directory\",\"children\":[{\"name\":\"VibrationTestGamePage.md\",\"type\":\"file\"}]}]}]}]},{\"name\":\"missing.txt\",\"type\":\"file\"},{\"name\":\"new-pt-intake-form-6.doc\",\"type\":\"file\"}]}");
const images$8 = [];
const neurospeccompanionmerged = {
  id: id$8,
  title: title$8,
  description: description$8,
  repoUrl: repoUrl$8,
  techStack: techStack$8,
  structure: structure$8,
  images: images$8,
};

const id$7 = "scheds";
const title$7 = "Scheds - A Course Schedule Generator";
const description$7 = "My proudest project yet, a comprehensive course schedule generator application built with ASP.NET Core MVC";
const repoUrl$7 = "https://github.com/aabdoo23/Scheds";
const liveUrl$4 = "https://scheds.runasp.net";
const techStack$7 = ["ASP.NET Core","C#","Entity Framework","SQL Server","Bootstrap","jQuery"];
const structure$7 = /* #__PURE__ */ JSON.parse("{\"root\":\"scheds\",\"children\":[{\"name\":\".gitattributes\",\"type\":\"file\"},{\"name\":\".gitignore\",\"type\":\"file\"},{\"name\":\"README.md\",\"type\":\"file\"},{\"name\":\"Scheds.Application\",\"type\":\"directory\",\"children\":[{\"name\":\"Interfaces\",\"type\":\"directory\",\"children\":[{\"name\":\"Repositories\",\"type\":\"directory\",\"children\":[{\"name\":\"Common\",\"type\":\"directory\",\"children\":[{\"name\":\"IBaseRepository.cs\",\"type\":\"file\"}]},{\"name\":\"ICardItemRepository.cs\",\"type\":\"file\"},{\"name\":\"ICourseBaseRepository.cs\",\"type\":\"file\"},{\"name\":\"ICourseScheduleRepository.cs\",\"type\":\"file\"},{\"name\":\"IInstructorRepository.cs\",\"type\":\"file\"}]},{\"name\":\"Services\",\"type\":\"directory\",\"children\":[{\"name\":\"ICardItemService.cs\",\"type\":\"file\"},{\"name\":\"IEmptyRoomsService.cs\",\"type\":\"file\"},{\"name\":\"IParsingService.cs\",\"type\":\"file\"},{\"name\":\"ISelfServiceLiveFetchService.cs\",\"type\":\"file\"}]}]},{\"name\":\"Scheds.Application.csproj\",\"type\":\"file\"}]},{\"name\":\"Scheds.Domain\",\"type\":\"directory\",\"children\":[{\"name\":\"DTOs\",\"type\":\"directory\",\"children\":[{\"name\":\"Common\",\"type\":\"directory\",\"children\":[{\"name\":\"PaginatedEntityDTO.cs\",\"type\":\"file\"}]},{\"name\":\"CustomCourseBaseDTO.cs\",\"type\":\"file\"},{\"name\":\"GenerateRequestDTO.cs\",\"type\":\"file\"},{\"name\":\"ReturnedCardItemDTO.cs\",\"type\":\"file\"},{\"name\":\"SelfService\",\"type\":\"directory\",\"children\":[{\"name\":\"SearchRequest.cs\",\"type\":\"file\"},{\"name\":\"SectionSearchParameters.cs\",\"type\":\"file\"}]}]},{\"name\":\"Entities\",\"type\":\"directory\",\"children\":[{\"name\":\"CardItem.cs\",\"type\":\"file\"},{\"name\":\"Common\",\"type\":\"directory\",\"children\":[{\"name\":\"BaseEntity.cs\",\"type\":\"file\"}]},{\"name\":\"CourseBase.cs\",\"type\":\"file\"},{\"name\":\"CourseSchedule.cs\",\"type\":\"file\"},{\"name\":\"Instructor.cs\",\"type\":\"file\"}]},{\"name\":\"Scheds.Domain.csproj\",\"type\":\"file\"},{\"name\":\"ViewModels\",\"type\":\"directory\",\"children\":[{\"name\":\"ErrorViewModel.cs\",\"type\":\"file\"},{\"name\":\"GenerateAndResultViewModel.cs\",\"type\":\"file\"}]}]},{\"name\":\"Scheds.Infrastructure\",\"type\":\"directory\",\"children\":[{\"name\":\"Configurations\",\"type\":\"directory\",\"children\":[{\"name\":\"CourseScheduleConfiguration.cs\",\"type\":\"file\"}]},{\"name\":\"Contexts\",\"type\":\"directory\",\"children\":[{\"name\":\"SchedsDbContext.cs\",\"type\":\"file\"}]},{\"name\":\"InfrastructureServiceDI.cs\",\"type\":\"file\"},{\"name\":\"Migrations\",\"type\":\"directory\",\"children\":[{\"name\":\"20250205215848_please.Designer.cs\",\"type\":\"file\"},{\"name\":\"20250205215848_please.cs\",\"type\":\"file\"},{\"name\":\"20250205221819_indexFix.Designer.cs\",\"type\":\"file\"},{\"name\":\"20250205221819_indexFix.cs\",\"type\":\"file\"},{\"name\":\"20250205225306_cache.Designer.cs\",\"type\":\"file\"},{\"name\":\"20250205225306_cache.cs\",\"type\":\"file\"},{\"name\":\"SchedsDbContextModelSnapshot.cs\",\"type\":\"file\"}]},{\"name\":\"Repositories\",\"type\":\"directory\",\"children\":[{\"name\":\"CardItemRepository.cs\",\"type\":\"file\"},{\"name\":\"Common\",\"type\":\"directory\",\"children\":[{\"name\":\"BaseRepository.cs\",\"type\":\"file\"}]},{\"name\":\"CourseBaseRepository.cs\",\"type\":\"file\"},{\"name\":\"CourseScheduleRepository.cs\",\"type\":\"file\"},{\"name\":\"InstructorRepository.cs\",\"type\":\"file\"}]},{\"name\":\"Scheds.Infrastructure.csproj\",\"type\":\"file\"},{\"name\":\"Services\",\"type\":\"directory\",\"children\":[{\"name\":\"CardItemService.cs\",\"type\":\"file\"},{\"name\":\"EmptyRoomsService.cs\",\"type\":\"file\"},{\"name\":\"ParsingService.cs\",\"type\":\"file\"},{\"name\":\"SelfServiceLiveFetchService.cs\",\"type\":\"file\"}]},{\"name\":\"Util\",\"type\":\"directory\",\"children\":[{\"name\":\"GenerationUtil.cs\",\"type\":\"file\"},{\"name\":\"GlobalTimeUtil.cs\",\"type\":\"file\"},{\"name\":\"IdGenerationUtil.cs\",\"type\":\"file\"}]}]},{\"name\":\"Scheds.sln\",\"type\":\"file\"},{\"name\":\"Scheds\",\"type\":\"directory\",\"children\":[{\"name\":\".config\",\"type\":\"directory\",\"children\":[{\"name\":\"dotnet-tools.json\",\"type\":\"file\"}]},{\"name\":\"Controllers\",\"type\":\"directory\",\"children\":[{\"name\":\"CardController.cs\",\"type\":\"file\"},{\"name\":\"CartController.cs\",\"type\":\"file\"},{\"name\":\"CourseBaseController.cs\",\"type\":\"file\"},{\"name\":\"CourseScheduleController.cs\",\"type\":\"file\"},{\"name\":\"CustomizationsController.cs\",\"type\":\"file\"},{\"name\":\"FindStudyRoomsController.cs\",\"type\":\"file\"},{\"name\":\"GenerateController.cs\",\"type\":\"file\"},{\"name\":\"GenerateSchedulesController.cs\",\"type\":\"file\"},{\"name\":\"HomeController.cs\",\"type\":\"file\"},{\"name\":\"InstructorController.cs\",\"type\":\"file\"},{\"name\":\"RoomController.cs\",\"type\":\"file\"}]},{\"name\":\"Program.cs\",\"type\":\"file\"},{\"name\":\"Properties\",\"type\":\"directory\",\"children\":[{\"name\":\"launchSettings.json\",\"type\":\"file\"}]},{\"name\":\"Scheds.MVC.csproj\",\"type\":\"file\"},{\"name\":\"Scheds.sln\",\"type\":\"file\"},{\"name\":\"Views\",\"type\":\"directory\",\"children\":[{\"name\":\"FindStudyRooms\",\"type\":\"directory\",\"children\":[{\"name\":\"index.cshtml\",\"type\":\"file\"}]},{\"name\":\"GenerateSchedules\",\"type\":\"directory\",\"children\":[{\"name\":\"Index.cshtml\",\"type\":\"file\"}]},{\"name\":\"Home\",\"type\":\"directory\",\"children\":[{\"name\":\"Index.cshtml\",\"type\":\"file\"},{\"name\":\"Privacy.cshtml\",\"type\":\"file\"}]},{\"name\":\"Shared\",\"type\":\"directory\",\"children\":[{\"name\":\"Components\",\"type\":\"directory\",\"children\":[{\"name\":\"AllSchedulesViewComponent\",\"type\":\"directory\",\"children\":[{\"name\":\"AllSchedulesViewComponent.cs\",\"type\":\"file\"},{\"name\":\"Default.cshtml\",\"type\":\"file\"}]},{\"name\":\"CardItemViewComponent\",\"type\":\"directory\",\"children\":[{\"name\":\"CardItemViewComponent.cs\",\"type\":\"file\"},{\"name\":\"Default.cshtml\",\"type\":\"file\"}]},{\"name\":\"OneHourCardItemViewComponent\",\"type\":\"directory\",\"children\":[{\"name\":\"Default.cshtml\",\"type\":\"file\"},{\"name\":\"OneHourCardItemViewComponent.cs\",\"type\":\"file\"}]},{\"name\":\"ScheduleViewComponent\",\"type\":\"directory\",\"children\":[{\"name\":\"Default.cshtml\",\"type\":\"file\"},{\"name\":\"ScheduleViewComponent.cs\",\"type\":\"file\"}]}]},{\"name\":\"Error.cshtml\",\"type\":\"file\"},{\"name\":\"_Layout.cshtml\",\"type\":\"file\"},{\"name\":\"_Layout.cshtml.css\",\"type\":\"file\"},{\"name\":\"_NavbarPartial.cshtml\",\"type\":\"file\"},{\"name\":\"_ValidationScriptsPartial.cshtml\",\"type\":\"file\"}]},{\"name\":\"_ViewImports.cshtml\",\"type\":\"file\"},{\"name\":\"_ViewStart.cshtml\",\"type\":\"file\"}]},{\"name\":\"appsettings.Development.json\",\"type\":\"file\"},{\"name\":\"wwwroot\",\"type\":\"directory\",\"children\":[{\"name\":\"css\",\"type\":\"directory\",\"children\":[{\"name\":\"styles.css\",\"type\":\"file\"}]},{\"name\":\"favicon.ico\",\"type\":\"file\"},{\"name\":\"images\",\"type\":\"directory\",\"children\":[{\"name\":\"Calendar-pana.png\",\"type\":\"file\"},{\"name\":\"Schedule-amico.png\",\"type\":\"file\"},{\"name\":\"Time management-cuate.png\",\"type\":\"file\"},{\"name\":\"abdo.png\",\"type\":\"file\"},{\"name\":\"hero-bg.jpg\",\"type\":\"file\"},{\"name\":\"ideas.png\",\"type\":\"file\"},{\"name\":\"image-removebg-preview (1).png\",\"type\":\"file\"},{\"name\":\"image-removebg-preview (2).png\",\"type\":\"file\"},{\"name\":\"image-removebg-preview.png\",\"type\":\"file\"},{\"name\":\"logo-new.png\",\"type\":\"file\"},{\"name\":\"new-bg-final.png\",\"type\":\"file\"},{\"name\":\"new-bg.png\",\"type\":\"file\"},{\"name\":\"questions.png\",\"type\":\"file\"},{\"name\":\"register.png\",\"type\":\"file\"},{\"name\":\"schedules.png\",\"type\":\"file\"},{\"name\":\"study.png\",\"type\":\"file\"},{\"name\":\"studyRooms.png\",\"type\":\"file\"}]},{\"name\":\"js\",\"type\":\"directory\",\"children\":[{\"name\":\"find-study-rooms.js\",\"type\":\"file\"},{\"name\":\"generate-schedules.js\",\"type\":\"file\"},{\"name\":\"script.js\",\"type\":\"file\"}]},{\"name\":\"lib\",\"type\":\"directory\",\"children\":[{\"name\":\"bootstrap\",\"type\":\"directory\",\"children\":[{\"name\":\"LICENSE\",\"type\":\"file\"},{\"name\":\"dist\",\"type\":\"directory\",\"children\":[{\"name\":\"css\",\"type\":\"directory\",\"children\":[{\"name\":\"bootstrap-grid.css\",\"type\":\"file\"},{\"name\":\"bootstrap-grid.css.map\",\"type\":\"file\"},{\"name\":\"bootstrap-grid.min.css\",\"type\":\"file\"},{\"name\":\"bootstrap-grid.min.css.map\",\"type\":\"file\"},{\"name\":\"bootstrap-grid.rtl.css\",\"type\":\"file\"},{\"name\":\"bootstrap-grid.rtl.css.map\",\"type\":\"file\"},{\"name\":\"bootstrap-grid.rtl.min.css\",\"type\":\"file\"},{\"name\":\"bootstrap-grid.rtl.min.css.map\",\"type\":\"file\"},{\"name\":\"bootstrap-reboot.css\",\"type\":\"file\"},{\"name\":\"bootstrap-reboot.css.map\",\"type\":\"file\"},{\"name\":\"bootstrap-reboot.min.css\",\"type\":\"file\"},{\"name\":\"bootstrap-reboot.min.css.map\",\"type\":\"file\"},{\"name\":\"bootstrap-reboot.rtl.css\",\"type\":\"file\"},{\"name\":\"bootstrap-reboot.rtl.css.map\",\"type\":\"file\"},{\"name\":\"bootstrap-reboot.rtl.min.css\",\"type\":\"file\"},{\"name\":\"bootstrap-reboot.rtl.min.css.map\",\"type\":\"file\"},{\"name\":\"bootstrap-utilities.css\",\"type\":\"file\"},{\"name\":\"bootstrap-utilities.css.map\",\"type\":\"file\"},{\"name\":\"bootstrap-utilities.min.css\",\"type\":\"file\"},{\"name\":\"bootstrap-utilities.min.css.map\",\"type\":\"file\"},{\"name\":\"bootstrap-utilities.rtl.css\",\"type\":\"file\"},{\"name\":\"bootstrap-utilities.rtl.css.map\",\"type\":\"file\"},{\"name\":\"bootstrap-utilities.rtl.min.css\",\"type\":\"file\"},{\"name\":\"bootstrap-utilities.rtl.min.css.map\",\"type\":\"file\"},{\"name\":\"bootstrap.css\",\"type\":\"file\"},{\"name\":\"bootstrap.css.map\",\"type\":\"file\"},{\"name\":\"bootstrap.min.css\",\"type\":\"file\"},{\"name\":\"bootstrap.min.css.map\",\"type\":\"file\"},{\"name\":\"bootstrap.rtl.css\",\"type\":\"file\"},{\"name\":\"bootstrap.rtl.css.map\",\"type\":\"file\"},{\"name\":\"bootstrap.rtl.min.css\",\"type\":\"file\"},{\"name\":\"bootstrap.rtl.min.css.map\",\"type\":\"file\"}]},{\"name\":\"js\",\"type\":\"directory\",\"children\":[{\"name\":\"bootstrap.bundle.js\",\"type\":\"file\"},{\"name\":\"bootstrap.bundle.js.map\",\"type\":\"file\"},{\"name\":\"bootstrap.bundle.min.js\",\"type\":\"file\"},{\"name\":\"bootstrap.bundle.min.js.map\",\"type\":\"file\"},{\"name\":\"bootstrap.esm.js\",\"type\":\"file\"},{\"name\":\"bootstrap.esm.js.map\",\"type\":\"file\"},{\"name\":\"bootstrap.esm.min.js\",\"type\":\"file\"},{\"name\":\"bootstrap.esm.min.js.map\",\"type\":\"file\"},{\"name\":\"bootstrap.js\",\"type\":\"file\"},{\"name\":\"bootstrap.js.map\",\"type\":\"file\"},{\"name\":\"bootstrap.min.js\",\"type\":\"file\"},{\"name\":\"bootstrap.min.js.map\",\"type\":\"file\"}]}]}]},{\"name\":\"jquery-validation-unobtrusive\",\"type\":\"directory\",\"children\":[{\"name\":\"LICENSE.txt\",\"type\":\"file\"},{\"name\":\"jquery.validate.unobtrusive.js\",\"type\":\"file\"},{\"name\":\"jquery.validate.unobtrusive.min.js\",\"type\":\"file\"}]},{\"name\":\"jquery-validation\",\"type\":\"directory\",\"children\":[{\"name\":\"LICENSE.md\",\"type\":\"file\"},{\"name\":\"dist\",\"type\":\"directory\",\"children\":[{\"name\":\"additional-methods.js\",\"type\":\"file\"},{\"name\":\"additional-methods.min.js\",\"type\":\"file\"},{\"name\":\"jquery.validate.js\",\"type\":\"file\"},{\"name\":\"jquery.validate.min.js\",\"type\":\"file\"}]}]},{\"name\":\"jquery\",\"type\":\"directory\",\"children\":[{\"name\":\"LICENSE.txt\",\"type\":\"file\"},{\"name\":\"dist\",\"type\":\"directory\",\"children\":[{\"name\":\"jquery.js\",\"type\":\"file\"},{\"name\":\"jquery.min.js\",\"type\":\"file\"},{\"name\":\"jquery.min.map\",\"type\":\"file\"}]}]}]}]}]}]}");
const images$7 = [{"url":"https://i.ibb.co/v6yPYfTb/landing-Page.png","alt":"Scheds Landing Page"},{"url":"https://i.ibb.co/6Jms8X4K/generated-Schedules.png","alt":"Scheds Generated Schedules"},{"url":"https://i.ibb.co/WpPxRqMr/customizations-Section.png","alt":"Scheds Customizations Section"}];
const scheds = {
  id: id$7,
  title: title$7,
  description: description$7,
  repoUrl: repoUrl$7,
  liveUrl: liveUrl$4,
  techStack: techStack$7,
  structure: structure$7,
  images: images$7,
};

const id$6 = "fadedtextrestoration";
const title$6 = "Faded Text Restoration";
const description$6 = "A project that uses image processing and OCR to restore faded English text from historical documents. It applies multiple enhancement steps, uses Tesseract OCR, and refines results via Gemini LLM.";
const repoUrl$6 = "https://github.com/aabdoo23/fadedTextRestoration";
const liveUrl$3 = "https://huggingface.co/spaces/aabdoo234/fadedTextRestoration";
const techStack$6 = ["Python","OpenCV","Tesseract OCR","Gradio","Gemini LLM"];
const structure$6 = {"root":"fadedTextRestoration","children":[{"name":"README.md","type":"file"},{"name":"app.py","type":"file"},{"name":"requirements.txt","type":"file"}]};
const images$6 = [{"url":"https://i.ibb.co/hJcLNM3m/main-Function.png","alt":"Faded Text Restoration"},{"url":"https://i.ibb.co/nMcRc0WT/transcribed.png","alt":"Faded Text Restoration"}];
const fadedTextRestoration = {
  id: id$6,
  title: title$6,
  description: description$6,
  repoUrl: repoUrl$6,
  liveUrl: liveUrl$3,
  techStack: techStack$6,
  structure: structure$6,
  images: images$6,
};

const id$5 = "clinicalmain";
const title$5 = "Recover360 - Clinic Management System";
const description$5 = "Recover360 is an advanced desktop application developed in C# using the Windows Presentation Foundation (WPF) framework. It is designed to streamline and enhance the operations of physiotherapy clinics, providing a comprehensive solution for efficient patient management, scheduling, and clinic administration. Leveraging Visual Studio and essential libraries compatible with Windows operating systems, Recover360 offers a user-friendly interface and key features for effective healthcare management.";
const repoUrl$5 = "https://github.com/aabdoo23/clinicalmain";
const techStack$5 = ["ASP.NET Core","C#","Entity Framework","SQL Server","Bootstrap","jQuery"];
const structure$5 = {"root":"clinicalmain","children":[{"name":".gitattributes","type":"file"},{"name":".gitignore","type":"file"},{"name":"README.md","type":"file"},{"name":"clinical.sln","type":"file"},{"name":"clinical","type":"directory","children":[{"name":"App.xaml","type":"file"},{"name":"App.xaml.cs","type":"file"},{"name":"AssemblyInfo.cs","type":"file"},{"name":"BaseClasses","type":"directory","children":[{"name":"AccessRequest.cs","type":"file"},{"name":"AppointmentType.cs","type":"file"},{"name":"AttendanceRecord.cs","type":"file"},{"name":"BillingRecord.cs","type":"file"},{"name":"CalendarEvent.cs","type":"file"},{"name":"ChatGroup.cs","type":"file"},{"name":"ChatMessage.cs","type":"file"},{"name":"ChatRoom.cs","type":"file"},{"name":"Equipment.cs","type":"file"},{"name":"EvaluationTest.cs","type":"file"},{"name":"EvaluationTestFeedBack.cs","type":"file"},{"name":"Exercise.cs","type":"file"},{"name":"Injury.cs","type":"file"},{"name":"IssueExercise.cs","type":"file"},{"name":"IssueScan.cs","type":"file"},{"name":"MedicalRecord.cs","type":"file"},{"name":"OntologyTerm.cs","type":"file"},{"name":"Package.cs","type":"file"},{"name":"Patient.cs","type":"file"},{"name":"Payment.cs","type":"file"},{"name":"Prescription.cs","type":"file"},{"name":"Room.cs","type":"file"},{"name":"ScanTest.cs","type":"file"},{"name":"Terms.txt","type":"file"},{"name":"TreatmentPlan.cs","type":"file"},{"name":"User.cs","type":"file"},{"name":"Visit.cs","type":"file"},{"name":"ontology.cs","type":"file"}]},{"name":"DB.cs","type":"file"},{"name":"MainWindow.xaml","type":"file"},{"name":"MainWindow.xaml.cs","type":"file"},{"name":"Pages","type":"directory","children":[{"name":"CalendarPage.xaml","type":"file"},{"name":"CalendarPage.xaml.cs","type":"file"},{"name":"ChatPage.xaml","type":"file"},{"name":"ChatPage.xaml.cs","type":"file"},{"name":"DashBoardPage.xaml","type":"file"},{"name":"DashBoardPage.xaml.cs","type":"file"},{"name":"PatientSearchPage.xaml","type":"file"},{"name":"PatientSearchPage.xaml.cs","type":"file"},{"name":"PhysioTherapistDashboard.xaml","type":"file"},{"name":"PhysioTherapistDashboard.xaml.cs","type":"file"},{"name":"PhysiotherapistSideBar.xaml","type":"file"},{"name":"PhysiotherapistSideBar.xaml.cs","type":"file"},{"name":"PrintingPage.xaml","type":"file"},{"name":"PrintingPage.xaml.cs","type":"file"},{"name":"accessRequestPage.xaml","type":"file"},{"name":"accessRequestPage.xaml.cs","type":"file"},{"name":"adminDashboardPage.xaml","type":"file"},{"name":"adminDashboardPage.xaml.cs","type":"file"},{"name":"adminSettingsNewPages","type":"directory","children":[{"name":"newAppointmentTypePage.xaml","type":"file"},{"name":"newAppointmentTypePage.xaml.cs","type":"file"},{"name":"newEquipment.xaml","type":"file"},{"name":"newEquipment.xaml.cs","type":"file"},{"name":"newEvaluationTestPage.xaml","type":"file"},{"name":"newEvaluationTestPage.xaml.cs","type":"file"},{"name":"newExercise.xaml","type":"file"},{"name":"newExercise.xaml.cs","type":"file"},{"name":"newInjury.xaml","type":"file"},{"name":"newInjury.xaml.cs","type":"file"},{"name":"newPackage.xaml","type":"file"},{"name":"newPackage.xaml.cs","type":"file"},{"name":"newRoom.xaml","type":"file"},{"name":"newRoom.xaml.cs","type":"file"},{"name":"newTreatmentPlan.xaml","type":"file"},{"name":"newTreatmentPlan.xaml.cs","type":"file"}]},{"name":"adminSettingsPage.xaml","type":"file"},{"name":"adminSettingsPage.xaml.cs","type":"file"},{"name":"adminSettingsSecondPage.xaml","type":"file"},{"name":"adminSettingsSecondPage.xaml.cs","type":"file"},{"name":"dicomViewer.xaml","type":"file"},{"name":"dicomViewer.xaml.cs","type":"file"},{"name":"newEmployeePage.xaml","type":"file"},{"name":"newEmployeePage.xaml.cs","type":"file"},{"name":"newPatientForm.xaml","type":"file"},{"name":"newPatientForm.xaml.cs","type":"file"},{"name":"newPatientPage.xaml","type":"file"},{"name":"newPatientPage.xaml.cs","type":"file"},{"name":"newRecordPage.xaml","type":"file"},{"name":"newRecordPage.xaml.cs","type":"file"},{"name":"patientView.xaml","type":"file"},{"name":"patientView.xaml.cs","type":"file"},{"name":"patientViewMainPage.xaml","type":"file"},{"name":"patientViewMainPage.xaml.cs","type":"file"},{"name":"reciptionistPages","type":"directory","children":[{"name":"ReceptionistDashboard.xaml","type":"file"},{"name":"ReceptionistDashboard.xaml.cs","type":"file"},{"name":"reciptionistViewPatient.xaml","type":"file"},{"name":"reciptionistViewPatient.xaml.cs","type":"file"},{"name":"reciptionistViewPhysioTherapist.xaml","type":"file"},{"name":"reciptionistViewPhysioTherapist.xaml.cs","type":"file"},{"name":"reciptionistViewVisit.xaml","type":"file"},{"name":"reciptionistViewVisit.xaml.cs","type":"file"}]},{"name":"treatmentPlanPage.xaml","type":"file"},{"name":"treatmentPlanPage.xaml.cs","type":"file"},{"name":"viewPhysiotherapist.xaml","type":"file"},{"name":"viewPhysiotherapist.xaml.cs","type":"file"},{"name":"visit.xaml","type":"file"},{"name":"visit.xaml.cs","type":"file"}]},{"name":"SideBarWindow.xaml","type":"file"},{"name":"SideBarWindow.xaml.cs","type":"file"},{"name":"clinical.csproj","type":"file"},{"name":"globals.cs","type":"file"},{"name":"images","type":"directory","children":[{"name":"3alolo.png","type":"file"},{"name":"9-Figure3-1.png","type":"file"},{"name":"CR7.png","type":"file"},{"name":"abdelkader.png","type":"file"},{"name":"afsha.png","type":"file"},{"name":"akram tawfik.png","type":"file"},{"name":"batta.png","type":"file"},{"name":"bottomRosheta.jpg","type":"file"},{"name":"dicom.JPG","type":"file"},{"name":"hand.jpg","type":"file"},{"name":"image-00000.dcm","type":"file"},{"name":"kahraba.png","type":"file"},{"name":"messi.png","type":"file"},{"name":"openHand.jpg","type":"file"},{"name":"salah.png","type":"file"},{"name":"shenawi.png","type":"file"},{"name":"topRosheta.jpg","type":"file"},{"name":"xray report.webp","type":"file"}]},{"name":"loginPage.xaml","type":"file"},{"name":"loginPage.xaml.cs","type":"file"},{"name":"newAppointmentWindow.xaml","type":"file"},{"name":"newAppointmentWindow.xaml.cs","type":"file"},{"name":"prescriptionWindow.xaml","type":"file"},{"name":"prescriptionWindow.xaml.cs","type":"file"},{"name":"tessdata","type":"directory","children":[{"name":"eng.traineddata","type":"file"}]},{"name":"userControls","type":"directory","children":[{"name":"AccountMenu.xaml","type":"file"},{"name":"AccountMenu.xaml.cs","type":"file"},{"name":"ImageLogo.xaml","type":"file"},{"name":"ImageLogo.xaml.cs","type":"file"},{"name":"Item.xaml","type":"file"},{"name":"Item.xaml.cs","type":"file"},{"name":"MenuButton.xaml","type":"file"},{"name":"MenuButton.xaml.cs","type":"file"},{"name":"MessageChat.xaml","type":"file"},{"name":"MessageChat.xaml.cs","type":"file"},{"name":"MyMessageChat.xaml","type":"file"},{"name":"MyMessageChat.xaml.cs","type":"file"},{"name":"RelayCommand.cs","type":"file"},{"name":"TextInfo.xaml","type":"file"},{"name":"TextInfo.xaml.cs","type":"file"},{"name":"UserChat.xaml","type":"file"},{"name":"UserChat.xaml.cs","type":"file"},{"name":"chatItem.xaml","type":"file"},{"name":"chatItem.xaml.cs","type":"file"},{"name":"chatMenuButton.xaml","type":"file"},{"name":"chatMenuButton.xaml.cs","type":"file"},{"name":"chatSeperator.xaml","type":"file"},{"name":"chatSeperator.xaml.cs","type":"file"},{"name":"dicomUtil","type":"directory","children":[{"name":"ConvertUtil.cs","type":"file"},{"name":"WinAPI.cs","type":"file"}]},{"name":"flyff.xaml","type":"file"},{"name":"flyff.xaml.cs","type":"file"},{"name":"medicalRecordObject.xaml","type":"file"},{"name":"medicalRecordObject.xaml.cs","type":"file"},{"name":"previousVisitObject.xaml","type":"file"},{"name":"previousVisitObject.xaml.cs","type":"file"},{"name":"showBox.xaml","type":"file"},{"name":"showBox.xaml.cs","type":"file"}]},{"name":"viewImage.xaml","type":"file"},{"name":"viewImage.xaml.cs","type":"file"},{"name":"viewUser.xaml","type":"file"},{"name":"viewUser.xaml.cs","type":"file"}]},{"name":"clinicalDB.sql","type":"file"},{"name":"missing project clinical.txt","type":"file"}]};
const images$5 = [];
const clinicalmain = {
  id: id$5,
  title: title$5,
  description: description$5,
  repoUrl: repoUrl$5,
  techStack: techStack$5,
  structure: structure$5,
  images: images$5,
};

const id$4 = "seatreservation";
const title$4 = "Seat Reservation";
const description$4 = "A comprehensive seat reservation system built with Java and JavaFX";
const repoUrl$4 = "https://github.com/aabdoo23/seatReservation";
const techStack$4 = ["Java","JavaFX","MySQL"];
const structure$4 = {"root":"seatReservation","children":[{"name":".gitignore","type":"file"},{"name":".idea","type":"directory","children":[{"name":".gitignore","type":"file"},{"name":"encodings.xml","type":"file"},{"name":"misc.xml","type":"file"},{"name":"uiDesigner.xml","type":"file"}]},{"name":".mvn","type":"directory","children":[{"name":"wrapper","type":"directory","children":[{"name":"maven-wrapper.jar","type":"file"},{"name":"maven-wrapper.properties","type":"file"}]}]},{"name":"generateTables.sql","type":"file"},{"name":"mvnw","type":"file"},{"name":"mvnw.cmd","type":"file"},{"name":"pom.xml","type":"file"},{"name":"src","type":"directory","children":[{"name":"main","type":"directory","children":[{"name":"java","type":"directory","children":[{"name":"com","type":"directory","children":[{"name":"example","type":"directory","children":[{"name":"seatreservation","type":"directory","children":[{"name":"AdminMainController.java","type":"file"},{"name":"CheckoutTicketController.java","type":"file"},{"name":"CreditCard.java","type":"file"},{"name":"DB.java","type":"file"},{"name":"Hall.java","type":"file"},{"name":"Main.java","type":"file"},{"name":"MainMenuController.java","type":"file"},{"name":"Movie.java","type":"file"},{"name":"NewMovieController.java","type":"file"},{"name":"NewPartyController.java","type":"file"},{"name":"NewTicketController.java","type":"file"},{"name":"NewUserController.java","type":"file"},{"name":"Party.java","type":"file"},{"name":"PrintTicket.java","type":"file"},{"name":"Seat.java","type":"file"},{"name":"Ticket.java","type":"file"},{"name":"User.java","type":"file"},{"name":"UserMainController.java","type":"file"},{"name":"ViewUserTKT.java","type":"file"},{"name":"globals.java","type":"file"},{"name":"newHallController.java","type":"file"}]}]}]},{"name":"module-info.java","type":"file"}]},{"name":"resources","type":"directory","children":[{"name":"com","type":"directory","children":[{"name":"example","type":"directory","children":[{"name":"seatreservation","type":"directory","children":[{"name":"adminMain.fxml","type":"file"},{"name":"checkoutTicket.fxml","type":"file"},{"name":"mainMenu.fxml","type":"file"},{"name":"movieTheatre.jpg","type":"file"},{"name":"newHall.fxml","type":"file"},{"name":"newMovie.fxml","type":"file"},{"name":"newParty.fxml","type":"file"},{"name":"newTicket.fxml","type":"file"},{"name":"newUserView.fxml","type":"file"},{"name":"theatre.jpg","type":"file"},{"name":"userMain.fxml","type":"file"},{"name":"viewUserTKT.fxml","type":"file"}]}]}]}]}]}]}]};
const images$4 = [];
const seatReservation = {
  id: id$4,
  title: title$4,
  description: description$4,
  repoUrl: repoUrl$4,
  techStack: techStack$4,
  structure: structure$4,
  images: images$4,
};

const id$3 = "nucpa-balloons";
const title$3 = "Nucpa Balloons";
const description$3 = "A comprehensive web application for managing balloon reservations and requests at Nucpa, fit for ACPC style contests";
const repoUrl$3 = "https://github.com/aabdoo23/nucpa-balloons";
const liveUrl$2 = "https://nucpa-balloons.vercel.app";
const techStack$3 = ["React","TypeScript","Tailwind CSS","Vercel"];
const structure$3 = {"root":"nucpa-balloons","children":[{"name":".gitignore","type":"file"},{"name":"dist","type":"directory","children":[{"name":"assets","type":"directory","children":[{"name":"index.BdnIJc1i.js","type":"file"},{"name":"index.DymT0wrZ.css","type":"file"},{"name":"roboto-cyrillic-300-normal.BoeCr7ev.woff2","type":"file"},{"name":"roboto-cyrillic-300-normal.brFHmz5Z.woff","type":"file"},{"name":"roboto-cyrillic-400-normal.DAIM1_dR.woff2","type":"file"},{"name":"roboto-cyrillic-400-normal.Dry59Hjn.woff","type":"file"},{"name":"roboto-cyrillic-500-normal.CsCirF4J.woff","type":"file"},{"name":"roboto-cyrillic-500-normal.hCeO1jFL.woff2","type":"file"},{"name":"roboto-cyrillic-700-normal.CB1Rmiii.woff","type":"file"},{"name":"roboto-cyrillic-700-normal.CzEIZVQR.woff2","type":"file"},{"name":"roboto-cyrillic-ext-300-normal.CUPJdUZp.woff2","type":"file"},{"name":"roboto-cyrillic-ext-300-normal.CbEu6Uxw.woff","type":"file"},{"name":"roboto-cyrillic-ext-400-normal.BxX1-eA_.woff","type":"file"},{"name":"roboto-cyrillic-ext-400-normal.DzMWdK87.woff2","type":"file"},{"name":"roboto-cyrillic-ext-500-normal.B7rQpwPu.woff2","type":"file"},{"name":"roboto-cyrillic-ext-500-normal.ElvJfk8V.woff","type":"file"},{"name":"roboto-cyrillic-ext-700-normal.CIu0AXX2.woff","type":"file"},{"name":"roboto-cyrillic-ext-700-normal.D_fA0fHY.woff2","type":"file"},{"name":"roboto-greek-300-normal.C_kb6SiH.woff","type":"file"},{"name":"roboto-greek-300-normal.Cnub06j7.woff2","type":"file"},{"name":"roboto-greek-400-normal.CAI06USH.woff","type":"file"},{"name":"roboto-greek-400-normal.jFM2czAU.woff2","type":"file"},{"name":"roboto-greek-500-normal.BJMS0heP.woff2","type":"file"},{"name":"roboto-greek-500-normal.D8eQD5zT.woff","type":"file"},{"name":"roboto-greek-700-normal.DCrt6r9F.woff","type":"file"},{"name":"roboto-greek-700-normal.DpKAje7q.woff2","type":"file"},{"name":"roboto-latin-300-normal.CztWkFGs.woff2","type":"file"},{"name":"roboto-latin-300-normal.xb4kL3zn.woff","type":"file"},{"name":"roboto-latin-400-normal.551zQQ7R.woff","type":"file"},{"name":"roboto-latin-400-normal.CNwBRw8h.woff2","type":"file"},{"name":"roboto-latin-500-normal.CkrA1NAy.woff2","type":"file"},{"name":"roboto-latin-500-normal._8jDuD7w.woff","type":"file"},{"name":"roboto-latin-700-normal.CTLkNcF_.woff","type":"file"},{"name":"roboto-latin-700-normal.DZr4b_KL.woff2","type":"file"},{"name":"roboto-latin-ext-300-normal.BOz0oSmX.woff2","type":"file"},{"name":"roboto-latin-ext-300-normal.ni96UL8R.woff","type":"file"},{"name":"roboto-latin-ext-400-normal.ZYmyxeOy.woff2","type":"file"},{"name":"roboto-latin-ext-400-normal.uRIBRJt5.woff","type":"file"},{"name":"roboto-latin-ext-500-normal.C_ARlJGk.woff2","type":"file"},{"name":"roboto-latin-ext-500-normal.eJ10kk0m.woff","type":"file"},{"name":"roboto-latin-ext-700-normal.BNPgmEQS.woff2","type":"file"},{"name":"roboto-latin-ext-700-normal.Cnx4FGpK.woff","type":"file"},{"name":"roboto-math-300-normal.BMxwzQmU.woff2","type":"file"},{"name":"roboto-math-300-normal.Bhb_hbXj.woff","type":"file"},{"name":"roboto-math-400-normal.B3wgz80t.woff2","type":"file"},{"name":"roboto-math-400-normal.DHrwdhE6.woff","type":"file"},{"name":"roboto-math-500-normal.CFNaIMFC.woff2","type":"file"},{"name":"roboto-math-500-normal.CetgDdIa.woff","type":"file"},{"name":"roboto-math-700-normal.CpTCM92H.woff","type":"file"},{"name":"roboto-math-700-normal.xbpggnJp.woff2","type":"file"},{"name":"roboto-symbols-300-normal.BtHl5mYl.woff2","type":"file"},{"name":"roboto-symbols-300-normal.VgGNgJlY.woff","type":"file"},{"name":"roboto-symbols-400-normal.bG5rsNFs.woff","type":"file"},{"name":"roboto-symbols-400-normal.fF1SLJBj.woff2","type":"file"},{"name":"roboto-symbols-500-normal.BXFTxrNR.woff2","type":"file"},{"name":"roboto-symbols-500-normal.toKUCDph.woff","type":"file"},{"name":"roboto-symbols-700-normal.B2QKVW64.woff","type":"file"},{"name":"roboto-symbols-700-normal.DKkQdRpM.woff2","type":"file"},{"name":"roboto-vietnamese-300-normal.CNeuLW5X.woff2","type":"file"},{"name":"roboto-vietnamese-300-normal.D46JPfnP.woff","type":"file"},{"name":"roboto-vietnamese-400-normal.CDDxGrUb.woff2","type":"file"},{"name":"roboto-vietnamese-400-normal.DgufTq8s.woff","type":"file"},{"name":"roboto-vietnamese-500-normal.Dw5heWgq.woff","type":"file"},{"name":"roboto-vietnamese-500-normal.HYpufUYk.woff2","type":"file"},{"name":"roboto-vietnamese-700-normal.BFWtvCOj.woff2","type":"file"},{"name":"roboto-vietnamese-700-normal.ChAl_rRV.woff","type":"file"}]},{"name":"index.html","type":"file"}]},{"name":"index.html","type":"file"},{"name":"install.ps1","type":"file"},{"name":"package-lock.json","type":"file"},{"name":"package.json","type":"file"},{"name":"src","type":"directory","children":[{"name":"App.tsx","type":"file"},{"name":"components","type":"directory","children":[{"name":"BalloonItem.tsx","type":"file"},{"name":"BalloonList.tsx","type":"file"},{"name":"EnvironmentSwitcher.tsx","type":"file"},{"name":"Navbar.tsx","type":"file"},{"name":"SettingsDialog.tsx","type":"file"},{"name":"Statistics.tsx","type":"file"},{"name":"ToiletRequestItem.tsx","type":"file"},{"name":"ToiletRequestStatistics.tsx","type":"file"},{"name":"common","type":"directory","children":[{"name":"ErrorDisplay.tsx","type":"file"},{"name":"LoadingDisplay.tsx","type":"file"},{"name":"SettingsDialog.tsx","type":"file"},{"name":"TabPanel.tsx","type":"file"}]},{"name":"layout","type":"directory","children":[{"name":"AppLayout.tsx","type":"file"}]},{"name":"statistics","type":"directory","children":[{"name":"StatCard.tsx","type":"file"},{"name":"ToiletRequestStatistics.tsx","type":"file"}]}]},{"name":"config.ts","type":"file"},{"name":"config","type":"directory","children":[{"name":"environments.ts","type":"file"}]},{"name":"hooks","type":"directory","children":[{"name":"useDataLoading.ts","type":"file"},{"name":"useSignalR.ts","type":"file"},{"name":"useUserSettings.ts","type":"file"}]},{"name":"main.tsx","type":"file"},{"name":"pages","type":"directory","children":[{"name":"AdminDashboardPage.tsx","type":"file"},{"name":"AdminSettingsPage.tsx","type":"file"},{"name":"LoginPage.tsx","type":"file"},{"name":"MainPage.tsx","type":"file"},{"name":"ToiletRequestPage.tsx","type":"file"}]},{"name":"services","type":"directory","children":[{"name":"api.ts","type":"file"},{"name":"signalR.ts","type":"file"}]},{"name":"theme.ts","type":"file"},{"name":"types","type":"directory","children":[{"name":"index.ts","type":"file"}]},{"name":"utils","type":"directory","children":[{"name":"roomMapping.ts","type":"file"}]}]},{"name":"tsconfig.json","type":"file"},{"name":"tsconfig.node.json","type":"file"},{"name":"vercel.json","type":"file"},{"name":"vite.config.ts","type":"file"}]};
const images$3 = [];
const nucpaBalloons = {
  id: id$3,
  title: title$3,
  description: description$3,
  repoUrl: repoUrl$3,
  liveUrl: liveUrl$2,
  techStack: techStack$3,
  structure: structure$3,
  images: images$3,
};

const id$2 = "nucpaballoonsapi";
const title$2 = "Nucpa Balloons API";
const description$2 = "A comprehensive API for the Nucpa Balloons project";
const repoUrl$2 = "https://github.com/aabdoo23/NucpaBalloonsApi";
const liveUrl$1 = "https://nucpa-balloons.runasp.net/swagger/index.html";
const techStack$2 = ["C#","ASP.NET Core","Entity Framework","SQL Server","Swagger"];
const structure$2 = {"root":"NucpaBalloonsApi","children":[{"name":".gitattributes","type":"file"},{"name":".gitignore","type":"file"},{"name":"Controllers","type":"directory","children":[{"name":"AdminController.cs","type":"file"},{"name":"AdminSettingsController.cs","type":"file"},{"name":"BalloonController.cs","type":"file"},{"name":"ProblemBalloonMapController.cs","type":"file"},{"name":"RoomController.cs","type":"file"},{"name":"TeamController.cs","type":"file"},{"name":"ToiletRequestController.cs","type":"file"}]},{"name":"Hubs","type":"directory","children":[{"name":"BalloonHub.cs","type":"file"}]},{"name":"Interfaces","type":"directory","children":[{"name":"Repositories","type":"directory","children":[{"name":"Common","type":"directory","children":[{"name":"IBaseRepository.cs","type":"file"}]},{"name":"IRoomRepository.cs","type":"file"},{"name":"ITeamRepository.cs","type":"file"}]},{"name":"Services","type":"directory","children":[{"name":"IAdminService.cs","type":"file"},{"name":"IAdminSettingsService.cs","type":"file"},{"name":"IBalloonService.cs","type":"file"},{"name":"ICodeforcesApiService.cs","type":"file"},{"name":"IProblemBalloonMapService.cs","type":"file"},{"name":"IRoomsService.cs","type":"file"},{"name":"ITeamsService.cs","type":"file"},{"name":"IToiletRequestService.cs","type":"file"}]}]},{"name":"Migrations","type":"directory","children":[{"name":"20250402001302_first-again.Designer.cs","type":"file"},{"name":"20250402001302_first-again.cs","type":"file"},{"name":"20250403040857_room-fix.Designer.cs","type":"file"},{"name":"20250403040857_room-fix.cs","type":"file"},{"name":"20250403173302_toilet-requests.Designer.cs","type":"file"},{"name":"20250403173302_toilet-requests.cs","type":"file"},{"name":"NucpaDbContextModelSnapshot.cs","type":"file"}]},{"name":"Models","type":"directory","children":[{"name":"Codeforces","type":"directory","children":[{"name":"ApiResponse.cs","type":"file"},{"name":"Contest.cs","type":"file"},{"name":"ContestStandings.cs","type":"file"},{"name":"Member.cs","type":"file"},{"name":"Party.cs","type":"file"},{"name":"Problem.cs","type":"file"},{"name":"ProblemResult.cs","type":"file"},{"name":"RanklistRow.cs","type":"file"},{"name":"Submission.cs","type":"file"}]},{"name":"Common","type":"directory","children":[{"name":"BaseEntity.cs","type":"file"},{"name":"StatusableEntity.cs","type":"file"}]},{"name":"DTOs","type":"directory","children":[{"name":"Admin","type":"directory","children":[{"name":"LoginRequestDTO.cs","type":"file"},{"name":"LoginResponseDTO.cs","type":"file"}]},{"name":"AdminSettingsResponseDTO.cs","type":"file"},{"name":"BalloonRequestDTO.cs","type":"file"},{"name":"BalloonStatisticsDTO.cs","type":"file"},{"name":"ToiletResponseDTO.cs","type":"file"}]},{"name":"Requests","type":"directory","children":[{"name":"AdminSettings","type":"directory","children":[{"name":"AdminSettingsCreateRequestDTO.cs","type":"file"},{"name":"AdminSettingsUpdateRequestDTO.cs","type":"file"}]},{"name":"BalloonRequest","type":"directory","children":[{"name":"BalloonStatusUpdateRequest.cs","type":"file"}]},{"name":"ProblemBalloonMaps","type":"directory","children":[{"name":"ProblemBalloonMapCreateRequestDTO.cs","type":"file"}]},{"name":"Rooms","type":"directory","children":[{"name":"RoomCreateRequestDTO.cs","type":"file"}]},{"name":"Teams","type":"directory","children":[{"name":"TeamCreateRequestDTO.cs","type":"file"}]},{"name":"ToiletRequest","type":"directory","children":[{"name":"ToiletRequestDTO.cs","type":"file"},{"name":"ToiletRequestStatusUpdateDTO.cs","type":"file"}]}]},{"name":"SystemModels","type":"directory","children":[{"name":"AdminSettings.cs","type":"file"},{"name":"BalloonRequest.cs","type":"file"},{"name":"ProblemBalloonMap.cs","type":"file"},{"name":"Room.cs","type":"file"},{"name":"Team.cs","type":"file"},{"name":"ToiletRequest.cs","type":"file"}]}]},{"name":"NucpaBalloonsApi.csproj","type":"file"},{"name":"NucpaBalloonsApi.http","type":"file"},{"name":"NucpaBalloonsApi.sln","type":"file"},{"name":"NucpaDbContext.cs","type":"file"},{"name":"Program.cs","type":"file"},{"name":"Properties","type":"directory","children":[{"name":"launchSettings.json","type":"file"}]},{"name":"Repositories","type":"directory","children":[{"name":"Common","type":"directory","children":[{"name":"BaseRepository.cs","type":"file"}]},{"name":"RoomRepository.cs","type":"file"},{"name":"TeamRepository.cs","type":"file"}]},{"name":"Services","type":"directory","children":[{"name":"AdminService.cs","type":"file"},{"name":"AdminSettingsService.cs","type":"file"},{"name":"BalloonService.cs","type":"file"},{"name":"BalloonUpdateService.cs","type":"file"},{"name":"CodeforcesApiService.cs","type":"file"},{"name":"ProblemBalloonMapService.cs","type":"file"},{"name":"RoomsService.cs","type":"file"},{"name":"TeamsService.cs","type":"file"},{"name":"ToiletRequestService.cs","type":"file"}]},{"name":"appsettings.Development.json","type":"file"},{"name":"appsettings.json","type":"file"},{"name":"package-lock.json","type":"file"},{"name":"package.json","type":"file"}]};
const images$2 = [];
const nucpaBalloonsApi = {
  id: id$2,
  title: title$2,
  description: description$2,
  repoUrl: repoUrl$2,
  liveUrl: liveUrl$1,
  techStack: techStack$2,
  structure: structure$2,
  images: images$2,
};

const id$1 = "portfolio";
const title$1 = "Portfolio (This Website)";
const description$1 = "An open source interactive portfolio website, with a clean and modern design, sections for education, experience, skills, competitions, and more. Built with Astro.js, Tailwind CSS, TypeScript, React, and Vercel.";
const repoUrl$1 = "https://github.com/aabdoo23/portfolio";
const liveUrl = "https://aabdoo23.vercel.app";
const techStack$1 = ["Astro.js","Tailwind CSS","TypeScript","React","Vercel"];
const structure$1 = {"root":"portfolio","children":[{"name":".gitignore","type":"file"},{"name":".vercel","type":"directory","children":[{"name":"output","type":"directory","children":[{"name":"_functions","type":"directory","children":[{"name":"_@astrojs-ssr-adapter.mjs","type":"file"},{"name":"_noop-actions.mjs","type":"file"},{"name":"_noop-middleware.mjs","type":"file"},{"name":"chunks","type":"directory","children":[{"name":"_astro_assets_SiEmllCD.mjs","type":"file"},{"name":"astro-designed-error-pages_CTohK4K9.mjs","type":"file"},{"name":"astro","type":"directory","children":[{"name":"server_DsaXRM-z.mjs","type":"file"}]},{"name":"entrypoint_Baf2ym7p.mjs","type":"file"},{"name":"path_BuZodYwm.mjs","type":"file"},{"name":"sharp_Dq3GUXHW.mjs","type":"file"}]},{"name":"entry.mjs","type":"file"},{"name":"pages","type":"directory","children":[{"name":"_image.astro.mjs","type":"file"},{"name":"api","type":"directory","children":[{"name":"chat.astro.mjs","type":"file"}]},{"name":"index.astro.mjs","type":"file"}]},{"name":"renderers.mjs","type":"file"}]},{"name":"config.json","type":"file"},{"name":"functions","type":"directory","children":[{"name":"_render.func","type":"directory","children":[{"name":".vc-config.json","type":"file"},{"name":"package.json","type":"file"},{"name":"src","type":"directory","children":[{"name":"pages","type":"directory","children":[{"name":"index.astro","type":"file"}]}]}]}]},{"name":"static","type":"directory","children":[{"name":"_astro","type":"directory","children":[{"name":"client.CBwL3ilQ.js","type":"file"},{"name":"index.CG0C8_-B.css","type":"file"},{"name":"index.ai7qpRr1.js","type":"file"},{"name":"mac-background1.BN3pAP-K.jpg","type":"file"},{"name":"mac-background2.DAWzICtV.jpg","type":"file"},{"name":"mac-background3.D2uWT5Yk.jpg","type":"file"}]},{"name":"resume.pdf","type":"file"},{"name":"robots.txt","type":"file"},{"name":"sitemap-0.xml","type":"file"},{"name":"sitemap-index.xml","type":"file"}]}]}]},{"name":".vscode","type":"directory","children":[{"name":"extensions.json","type":"file"},{"name":"launch.json","type":"file"}]},{"name":"README.md","type":"file"},{"name":"astro.config.mjs","type":"file"},{"name":"package-lock.json","type":"file"},{"name":"package.json","type":"file"},{"name":"public","type":"directory","children":[{"name":"resume.pdf","type":"file"},{"name":"robots.txt","type":"file"}]},{"name":"src","type":"directory","children":[{"name":"assets","type":"directory","children":[{"name":"images","type":"directory","children":[{"name":"mac-background1.jpg","type":"file"},{"name":"mac-background2.jpg","type":"file"},{"name":"mac-background3.jpg","type":"file"},{"name":"projects","type":"directory","children":[{"name":"faded-text","type":"directory","children":[{"name":"mainFunction.png","type":"file"},{"name":"transcribed.png","type":"file"}]},{"name":"scheds","type":"directory","children":[{"name":"customizationsSection.png","type":"file"},{"name":"generatedSchedules.png","type":"file"},{"name":"landingPage.png","type":"file"}]}]}]}]},{"name":"components","type":"directory","children":[{"name":"LandingPage.astro","type":"file"},{"name":"global","type":"directory","children":[{"name":"BaseHead.astro","type":"file"},{"name":"DesktopDock.tsx","type":"file"},{"name":"GitHubViewer.tsx","type":"file"},{"name":"MacTerminal.tsx","type":"file"},{"name":"MacToolbar.tsx","type":"file"},{"name":"MobileDock.tsx","type":"file"},{"name":"NotesApp.tsx","type":"file"},{"name":"ResumeViewer.tsx","type":"file"},{"name":"SpotifyPlayer.tsx","type":"file"}]}]},{"name":"config","type":"directory","children":[{"name":"projects","type":"directory","children":[{"name":"clinicalmain.json","type":"file"},{"name":"fadedtextrestoration.json","type":"file"},{"name":"foodies.json","type":"file"},{"name":"neurospeccompanionmerged.json","type":"file"},{"name":"nucpa-balloons.json","type":"file"},{"name":"nucpaballoonsapi.json","type":"file"},{"name":"portfolio.json","type":"file"},{"name":"scheds.json","type":"file"},{"name":"seatreservation.json","type":"file"}]},{"name":"userConfig.ts","type":"file"}]},{"name":"layouts","type":"directory","children":[{"name":"AppLayout.tsx","type":"file"},{"name":"Layout.astro","type":"file"}]},{"name":"pages","type":"directory","children":[{"name":"api","type":"directory","children":[{"name":"chat.ts","type":"file"}]},{"name":"index.astro","type":"file"}]},{"name":"styles","type":"directory","children":[{"name":"global.css","type":"file"}]}]},{"name":"tsconfig.json","type":"file"},{"name":"util","type":"directory","children":[{"name":"github_repo_parser.py","type":"file"},{"name":"requirements.txt","type":"file"}]}]};
const images$1 = [{"url":"https://i.ibb.co/gbNxMqmP/B5-BE581-F-2-C7-C-48-A8-9-E7-C-77073-BEB66-AF.png","alt":"Portfolio","description":"Portfolio"},{"url":"https://i.ibb.co/FdTHqhM/68-D528-EE-07-BF-4406-8363-08-B2-CFB7-A381.png","alt":"Portfolio","description":"Projects Page"},{"url":"https://i.ibb.co/TBDmDtX8/495-DAF06-BC3-D-424-B-A8-FA-7-BEE852-B5012.png","alt":"Portfolio","description":"Project Page"},{"url":"https://i.ibb.co/qFNw99gR/D1-CD7826-84-EF-42-AC-BA40-55766-D792771.png","alt":"Portfolio","description":"Notes App"}];
const portfolio = {
  id: id$1,
  title: title$1,
  description: description$1,
  repoUrl: repoUrl$1,
  liveUrl,
  techStack: techStack$1,
  structure: structure$1,
  images: images$1,
};

const id = "foodies";
const title = "Foodies";
const description = "A web application for managing a restaurant's menu, orders, and customer information.";
const repoUrl = "https://github.com/aabdoo23/foodies";
const techStack = ["C#","ASP.NET Core","Entity Framework","SQL Server","Bootstrap","jQuery"];
const structure = /* #__PURE__ */ JSON.parse("{\"root\":\"foodies\",\"children\":[{\"name\":\".DS_Store\",\"type\":\"file\"},{\"name\":\".gitattributes\",\"type\":\"file\"},{\"name\":\".gitignore\",\"type\":\"file\"},{\"name\":\"Foodies.sln\",\"type\":\"file\"},{\"name\":\"Foodies\",\"type\":\"directory\",\"children\":[{\"name\":\".DS_Store\",\"type\":\"file\"},{\"name\":\".config\",\"type\":\"directory\",\"children\":[{\"name\":\"dotnet-tools.json\",\"type\":\"file\"}]},{\"name\":\"Common\",\"type\":\"directory\",\"children\":[{\"name\":\"BaseEntity.cs\",\"type\":\"file\"},{\"name\":\"ConfigureServices.cs\",\"type\":\"file\"},{\"name\":\"IBaseRepository.cs\",\"type\":\"file\"}]},{\"name\":\"Controllers\",\"type\":\"directory\",\"children\":[{\"name\":\"BranchManagerController.cs\",\"type\":\"file\"},{\"name\":\"CustomerViewController.cs\",\"type\":\"file\"},{\"name\":\"HomeController.cs\",\"type\":\"file\"},{\"name\":\"MapService.cs\",\"type\":\"file\"},{\"name\":\"MasterController.cs\",\"type\":\"file\"},{\"name\":\"MenuController.cs\",\"type\":\"file\"},{\"name\":\"OrderController.cs\",\"type\":\"file\"},{\"name\":\"RestaurantController.cs\",\"type\":\"file\"}]},{\"name\":\"Data\",\"type\":\"directory\",\"children\":[{\"name\":\"Foodiesdbcontext.cs\",\"type\":\"file\"}]},{\"name\":\"EmailSender.cs\",\"type\":\"file\"},{\"name\":\"Exceptions\",\"type\":\"directory\",\"children\":[{\"name\":\"CustomerAlreadyExistsException.cs\",\"type\":\"file\"},{\"name\":\"NotFoundException.cs\",\"type\":\"file\"}]},{\"name\":\"Foodies.csproj\",\"type\":\"file\"},{\"name\":\"Foodies.sln\",\"type\":\"file\"},{\"name\":\"GlobalUsing.cs\",\"type\":\"file\"},{\"name\":\"ImageUploader.cs\",\"type\":\"file\"},{\"name\":\"Interfaces\",\"type\":\"directory\",\"children\":[{\"name\":\"Repositories\",\"type\":\"directory\",\"children\":[{\"name\":\"IAddressRepository.cs\",\"type\":\"file\"},{\"name\":\"IAdminRepository.cs\",\"type\":\"file\"},{\"name\":\"IBranchManagerRepository.cs\",\"type\":\"file\"},{\"name\":\"IBranchRepository.cs\",\"type\":\"file\"},{\"name\":\"ICardRepository.cs\",\"type\":\"file\"},{\"name\":\"ICustomerRepository.cs\",\"type\":\"file\"},{\"name\":\"IMenuItemRepository.cs\",\"type\":\"file\"},{\"name\":\"IOrderRepository.cs\",\"type\":\"file\"},{\"name\":\"IPaymentRepository.cs\",\"type\":\"file\"},{\"name\":\"IRatingRepository.cs\",\"type\":\"file\"},{\"name\":\"IRestaurantRepository.cs\",\"type\":\"file\"}]},{\"name\":\"Services\",\"type\":\"directory\",\"children\":[{\"name\":\"IAdminService.cs\",\"type\":\"file\"},{\"name\":\"IBranchManagerService.cs\",\"type\":\"file\"},{\"name\":\"ICustomerService.cs\",\"type\":\"file\"}]}]},{\"name\":\"Migrations\",\"type\":\"directory\",\"children\":[{\"name\":\"20241014174146_all.Designer.cs\",\"type\":\"file\"},{\"name\":\"20241014174146_all.cs\",\"type\":\"file\"},{\"name\":\"20241016202846_delete.Designer.cs\",\"type\":\"file\"},{\"name\":\"20241016202846_delete.cs\",\"type\":\"file\"},{\"name\":\"20241016203012_deletemaxmin.Designer.cs\",\"type\":\"file\"},{\"name\":\"20241016203012_deletemaxmin.cs\",\"type\":\"file\"},{\"name\":\"FoodiesDbContextModelSnapshot.cs\",\"type\":\"file\"}]},{\"name\":\"Models\",\"type\":\"directory\",\"children\":[{\"name\":\"Address.cs\",\"type\":\"file\"},{\"name\":\"Admin.cs\",\"type\":\"file\"},{\"name\":\"BaseUser.cs\",\"type\":\"file\"},{\"name\":\"Branch.cs\",\"type\":\"file\"},{\"name\":\"BranchManager.cs\",\"type\":\"file\"},{\"name\":\"Card.cs\",\"type\":\"file\"},{\"name\":\"Customer.cs\",\"type\":\"file\"},{\"name\":\"MenuItem.cs\",\"type\":\"file\"},{\"name\":\"Order.cs\",\"type\":\"file\"},{\"name\":\"Payment.cs\",\"type\":\"file\"},{\"name\":\"Rating.cs\",\"type\":\"file\"},{\"name\":\"Restaurant.cs\",\"type\":\"file\"}]},{\"name\":\"Program.cs\",\"type\":\"file\"},{\"name\":\"Properties\",\"type\":\"directory\",\"children\":[{\"name\":\"launchSettings.json\",\"type\":\"file\"}]},{\"name\":\"Repositories\",\"type\":\"directory\",\"children\":[{\"name\":\"AddressRepository.cs\",\"type\":\"file\"},{\"name\":\"AdminRepository.cs\",\"type\":\"file\"},{\"name\":\"BranchManagerRepository.cs\",\"type\":\"file\"},{\"name\":\"BranchRepository.cs\",\"type\":\"file\"},{\"name\":\"CardRepository.cs\",\"type\":\"file\"},{\"name\":\"CustomerRepository.cs\",\"type\":\"file\"},{\"name\":\"MenuItemRepository.cs\",\"type\":\"file\"},{\"name\":\"OrderRepository.cs\",\"type\":\"file\"},{\"name\":\"PaymentRepository.cs\",\"type\":\"file\"},{\"name\":\"RatingRepository.cs\",\"type\":\"file\"},{\"name\":\"RestaurantRepository.cs\",\"type\":\"file\"}]},{\"name\":\"Services\",\"type\":\"directory\",\"children\":[{\"name\":\"AdminService.cs\",\"type\":\"file\"},{\"name\":\"BranchManagerService.cs\",\"type\":\"file\"},{\"name\":\"CustomerService.cs\",\"type\":\"file\"}]},{\"name\":\"UserRoles.cs\",\"type\":\"file\"},{\"name\":\"ViewModels\",\"type\":\"directory\",\"children\":[{\"name\":\"AddbranchViewmodel.cs\",\"type\":\"file\"},{\"name\":\"AdminProfileViewmodel.cs\",\"type\":\"file\"},{\"name\":\"AdminRegisterViewModel.cs\",\"type\":\"file\"},{\"name\":\"Components\",\"type\":\"directory\",\"children\":[{\"name\":\"ButtonViewModel.cs\",\"type\":\"file\"},{\"name\":\"Customerviewmodel.cs\",\"type\":\"file\"},{\"name\":\"FoodCardViewModel.cs\",\"type\":\"file\"}]},{\"name\":\"CustomerViewModel.cs\",\"type\":\"file\"},{\"name\":\"ErrorViewModel.cs\",\"type\":\"file\"},{\"name\":\"LogInViewModel.cs\",\"type\":\"file\"},{\"name\":\"MenuViewModel.cs\",\"type\":\"file\"},{\"name\":\"RatingViewModel.cs\",\"type\":\"file\"},{\"name\":\"RegistrationViewModel.cs\",\"type\":\"file\"},{\"name\":\"RestaurantEditView.cs\",\"type\":\"file\"}]},{\"name\":\"Views\",\"type\":\"directory\",\"children\":[{\"name\":\".DS_Store\",\"type\":\"file\"},{\"name\":\"BranchManager\",\"type\":\"directory\",\"children\":[{\"name\":\"Details.cshtml\",\"type\":\"file\"},{\"name\":\"OrderList.cshtml\",\"type\":\"file\"},{\"name\":\"Profile.cshtml\",\"type\":\"file\"}]},{\"name\":\"Home\",\"type\":\"directory\",\"children\":[{\"name\":\"AddBranch.cshtml\",\"type\":\"file\"},{\"name\":\"AddMenuItem.cshtml\",\"type\":\"file\"},{\"name\":\"AdminProfile.cshtml\",\"type\":\"file\"},{\"name\":\"DeletAdmin.cshtml\",\"type\":\"file\"},{\"name\":\"EditMenuItem.cshtml\",\"type\":\"file\"},{\"name\":\"UserView.cshtml\",\"type\":\"file\"},{\"name\":\"changepass.cshtml\",\"type\":\"file\"},{\"name\":\"credit.cshtml\",\"type\":\"file\"}]},{\"name\":\"Main\",\"type\":\"directory\",\"children\":[{\"name\":\"Index.cshtml\",\"type\":\"file\"}]},{\"name\":\"Master\",\"type\":\"directory\",\"children\":[{\"name\":\"AdminSignUp.cshtml\",\"type\":\"file\"},{\"name\":\"ConfirmCustomerLogIn.cshtml\",\"type\":\"file\"},{\"name\":\"CustomerLogIn.cshtml\",\"type\":\"file\"},{\"name\":\"Login.cshtml\",\"type\":\"file\"},{\"name\":\"ResLogIn.cshtml\",\"type\":\"file\"},{\"name\":\"UserSignUp.cshtml\",\"type\":\"file\"},{\"name\":\"view.cshtml\",\"type\":\"file\"}]},{\"name\":\"Menu\",\"type\":\"directory\",\"children\":[{\"name\":\"Favourite.cshtml\",\"type\":\"file\"},{\"name\":\"Index.cshtml\",\"type\":\"file\"},{\"name\":\"Rate.cshtml\",\"type\":\"file\"},{\"name\":\"Restaurant.cshtml\",\"type\":\"file\"},{\"name\":\"_MenuItems.cshtml\",\"type\":\"file\"}]},{\"name\":\"Order\",\"type\":\"directory\",\"children\":[{\"name\":\"History.cshtml\",\"type\":\"file\"},{\"name\":\"Index.cshtml\",\"type\":\"file\"},{\"name\":\"OrderView.cshtml\",\"type\":\"file\"},{\"name\":\"cart.cshtml\",\"type\":\"file\"},{\"name\":\"cart.cshtml.cs\",\"type\":\"file\"},{\"name\":\"checkout.cshtml\",\"type\":\"file\"}]},{\"name\":\"Shared\",\"type\":\"directory\",\"children\":[{\"name\":\"AdminNavbar.cshtml\",\"type\":\"file\"},{\"name\":\"BranchManagerNavbar.cshtml\",\"type\":\"file\"},{\"name\":\"Components\",\"type\":\"directory\",\"children\":[{\"name\":\"ButtonViewComponent\",\"type\":\"directory\",\"children\":[{\"name\":\"ButtonViewComponent.cs\",\"type\":\"file\"},{\"name\":\"Default.cshtml\",\"type\":\"file\"}]},{\"name\":\"CategoryCardViewComponent\",\"type\":\"directory\",\"children\":[{\"name\":\"CategoryCardViewComponent.cs\",\"type\":\"file\"},{\"name\":\"Default.cshtml\",\"type\":\"file\"}]},{\"name\":\"RedButtonViewComponent\",\"type\":\"directory\",\"children\":[{\"name\":\"Default.cshtml\",\"type\":\"file\"},{\"name\":\"RedButtonViewComponent.cs\",\"type\":\"file\"}]}]},{\"name\":\"CustomerNavbar.cshtml\",\"type\":\"file\"},{\"name\":\"Error.cshtml\",\"type\":\"file\"},{\"name\":\"_Layout.cshtml\",\"type\":\"file\"},{\"name\":\"_Layout.cshtml.css\",\"type\":\"file\"},{\"name\":\"_ValidationScriptsPartial.cshtml\",\"type\":\"file\"}]},{\"name\":\"_ViewImports.cshtml\",\"type\":\"file\"},{\"name\":\"_ViewStart.cshtml\",\"type\":\"file\"}]},{\"name\":\"appsettings.Development.json\",\"type\":\"file\"},{\"name\":\"appsettings.json\",\"type\":\"file\"},{\"name\":\"wwwroot\",\"type\":\"directory\",\"children\":[{\"name\":\".DS_Store\",\"type\":\"file\"},{\"name\":\"Image\",\"type\":\"directory\",\"children\":[{\"name\":\"WhatsApp Image 2024-09-14 at 11.49.35 PM.jpeg\",\"type\":\"file\"},{\"name\":\"beef.jpg\",\"type\":\"file\"},{\"name\":\"drink.jpg\",\"type\":\"file\"},{\"name\":\"garlic.jpg\",\"type\":\"file\"},{\"name\":\"pp.png\",\"type\":\"file\"},{\"name\":\"premium.jpg\",\"type\":\"file\"},{\"name\":\"sandwich.jpg\",\"type\":\"file\"}]},{\"name\":\"assets\",\"type\":\"directory\",\"children\":[{\"name\":\"images\",\"type\":\"directory\",\"children\":[{\"name\":\"menu\",\"type\":\"directory\",\"children\":[{\"name\":\"cart_icon.png\",\"type\":\"file\"},{\"name\":\"chicken_sandwich.png\",\"type\":\"file\"},{\"name\":\"foodies_logo.png\",\"type\":\"file\"},{\"name\":\"logo.png\",\"type\":\"file\"},{\"name\":\"user.png\",\"type\":\"file\"}]},{\"name\":\"order_history\",\"type\":\"directory\",\"children\":[{\"name\":\"burger.png\",\"type\":\"file\"},{\"name\":\"cart_icon.png\",\"type\":\"file\"},{\"name\":\"foodies_logo.png\",\"type\":\"file\"},{\"name\":\"pizza.png\",\"type\":\"file\"},{\"name\":\"user.png\",\"type\":\"file\"}]}]}]},{\"name\":\"css\",\"type\":\"directory\",\"children\":[{\"name\":\"History.css\",\"type\":\"file\"},{\"name\":\"Main.css\",\"type\":\"file\"},{\"name\":\"Menu.css\",\"type\":\"file\"},{\"name\":\"Navbar.css\",\"type\":\"file\"},{\"name\":\"form.css\",\"type\":\"file\"},{\"name\":\"restaurant.css\",\"type\":\"file\"},{\"name\":\"site.css\",\"type\":\"file\"}]},{\"name\":\"favicbon.ico\",\"type\":\"file\"},{\"name\":\"favicon.ico\",\"type\":\"file\"},{\"name\":\"images\",\"type\":\"directory\",\"children\":[{\"name\":\"FoodiesBanner2.png\",\"type\":\"file\"},{\"name\":\"FoodiesBanner3.png\",\"type\":\"file\"},{\"name\":\"FoodiesBanner4.png\",\"type\":\"file\"},{\"name\":\"FoodiesBanner5.png\",\"type\":\"file\"},{\"name\":\"food.png\",\"type\":\"file\"},{\"name\":\"foodies logo.png\",\"type\":\"file\"},{\"name\":\"foodies.png\",\"type\":\"file\"},{\"name\":\"logo.png\",\"type\":\"file\"},{\"name\":\"text.png\",\"type\":\"file\"}]},{\"name\":\"js\",\"type\":\"directory\",\"children\":[{\"name\":\"sefr.js\",\"type\":\"file\"},{\"name\":\"site.js\",\"type\":\"file\"}]},{\"name\":\"lib\",\"type\":\"directory\",\"children\":[{\"name\":\"bootstrap\",\"type\":\"directory\",\"children\":[{\"name\":\"LICENSE\",\"type\":\"file\"},{\"name\":\"dist\",\"type\":\"directory\",\"children\":[{\"name\":\"css\",\"type\":\"directory\",\"children\":[{\"name\":\"bootstrap-grid.css\",\"type\":\"file\"},{\"name\":\"bootstrap-grid.css.map\",\"type\":\"file\"},{\"name\":\"bootstrap-grid.min.css\",\"type\":\"file\"},{\"name\":\"bootstrap-grid.min.css.map\",\"type\":\"file\"},{\"name\":\"bootstrap-grid.rtl.css\",\"type\":\"file\"},{\"name\":\"bootstrap-grid.rtl.css.map\",\"type\":\"file\"},{\"name\":\"bootstrap-grid.rtl.min.css\",\"type\":\"file\"},{\"name\":\"bootstrap-grid.rtl.min.css.map\",\"type\":\"file\"},{\"name\":\"bootstrap-reboot.css\",\"type\":\"file\"},{\"name\":\"bootstrap-reboot.css.map\",\"type\":\"file\"},{\"name\":\"bootstrap-reboot.min.css\",\"type\":\"file\"},{\"name\":\"bootstrap-reboot.min.css.map\",\"type\":\"file\"},{\"name\":\"bootstrap-reboot.rtl.css\",\"type\":\"file\"},{\"name\":\"bootstrap-reboot.rtl.css.map\",\"type\":\"file\"},{\"name\":\"bootstrap-reboot.rtl.min.css\",\"type\":\"file\"},{\"name\":\"bootstrap-reboot.rtl.min.css.map\",\"type\":\"file\"},{\"name\":\"bootstrap-utilities.css\",\"type\":\"file\"},{\"name\":\"bootstrap-utilities.css.map\",\"type\":\"file\"},{\"name\":\"bootstrap-utilities.min.css\",\"type\":\"file\"},{\"name\":\"bootstrap-utilities.min.css.map\",\"type\":\"file\"},{\"name\":\"bootstrap-utilities.rtl.css\",\"type\":\"file\"},{\"name\":\"bootstrap-utilities.rtl.css.map\",\"type\":\"file\"},{\"name\":\"bootstrap-utilities.rtl.min.css\",\"type\":\"file\"},{\"name\":\"bootstrap-utilities.rtl.min.css.map\",\"type\":\"file\"},{\"name\":\"bootstrap.css\",\"type\":\"file\"},{\"name\":\"bootstrap.css.map\",\"type\":\"file\"},{\"name\":\"bootstrap.min.css\",\"type\":\"file\"},{\"name\":\"bootstrap.min.css.map\",\"type\":\"file\"},{\"name\":\"bootstrap.rtl.css\",\"type\":\"file\"},{\"name\":\"bootstrap.rtl.css.map\",\"type\":\"file\"},{\"name\":\"bootstrap.rtl.min.css\",\"type\":\"file\"},{\"name\":\"bootstrap.rtl.min.css.map\",\"type\":\"file\"}]},{\"name\":\"js\",\"type\":\"directory\",\"children\":[{\"name\":\"bootstrap.bundle.js\",\"type\":\"file\"},{\"name\":\"bootstrap.bundle.js.map\",\"type\":\"file\"},{\"name\":\"bootstrap.bundle.min.js\",\"type\":\"file\"},{\"name\":\"bootstrap.bundle.min.js.map\",\"type\":\"file\"},{\"name\":\"bootstrap.esm.js\",\"type\":\"file\"},{\"name\":\"bootstrap.esm.js.map\",\"type\":\"file\"},{\"name\":\"bootstrap.esm.min.js\",\"type\":\"file\"},{\"name\":\"bootstrap.esm.min.js.map\",\"type\":\"file\"},{\"name\":\"bootstrap.js\",\"type\":\"file\"},{\"name\":\"bootstrap.js.map\",\"type\":\"file\"},{\"name\":\"bootstrap.min.js\",\"type\":\"file\"},{\"name\":\"bootstrap.min.js.map\",\"type\":\"file\"},{\"name\":\"main.js\",\"type\":\"file\"}]}]}]},{\"name\":\"jquery-validation-unobtrusive\",\"type\":\"directory\",\"children\":[{\"name\":\"LICENSE.txt\",\"type\":\"file\"},{\"name\":\"jquery.validate.unobtrusive.js\",\"type\":\"file\"},{\"name\":\"jquery.validate.unobtrusive.min.js\",\"type\":\"file\"}]},{\"name\":\"jquery-validation\",\"type\":\"directory\",\"children\":[{\"name\":\"LICENSE.md\",\"type\":\"file\"},{\"name\":\"dist\",\"type\":\"directory\",\"children\":[{\"name\":\"additional-methods.js\",\"type\":\"file\"},{\"name\":\"additional-methods.min.js\",\"type\":\"file\"},{\"name\":\"jquery.validate.js\",\"type\":\"file\"},{\"name\":\"jquery.validate.min.js\",\"type\":\"file\"}]}]},{\"name\":\"jquery\",\"type\":\"directory\",\"children\":[{\"name\":\"LICENSE.txt\",\"type\":\"file\"},{\"name\":\"dist\",\"type\":\"directory\",\"children\":[{\"name\":\"jquery.js\",\"type\":\"file\"},{\"name\":\"jquery.min.js\",\"type\":\"file\"},{\"name\":\"jquery.min.map\",\"type\":\"file\"}]}]}]}]}]},{\"name\":\"README.md\",\"type\":\"file\"}]}");
const images = [{"url":"https://i.ibb.co/8ns386XR/381748439-2bb2b8cf-4288-4cb6-97ec-094c88633e41.png","alt":"Foodies Landing Page"}];
const foodies = {
  id,
  title,
  description,
  repoUrl,
  techStack,
  structure,
  images,
};

const userConfig = {
  // Personal Information
  name: "Abdelrahman Saleh",
  role: "Software Developer - Backend Developer",
  location: "Giza, Egypt",
  website: "aabdoo23",
  roleFocus: "Backend Development using .NET, C#, Entity Framework, SQL Server, and Bootstrap. Can also work with Angular, React, and Node.js.",
  age: 23,
  // Social Links
  social: {
    github: "https://github.com/aabdoo23",
    linkedin: "https://www.linkedin.com/in/aabdoo23/"
    // Add your LinkedIn URL
  },
  // Contact Information
  contact: {
    email: "aabdoo2304@gmail.com",
    phone: "+201007952039",
    // Add your phone number
    calendly: "https://calendly.com/aabdoo2304"
    // Add your Calendly URL
  },
  // Spotify Configuration
  spotify: {
    playlistId: "5WsS94KKm5wDhgEpg8VcgM"},
  // Resume Configuration
  resume: {
    url: "https://drive.google.com/file/d/1ZyaeXLpdOtPUygFCu55yYCQSEdW3K4pm/view",
    localPath: "/resume.pdf"
  },
  // Education Background
  education: [
    {
      degree: "Bachelor of Computer Science",
      major: "Biomedical Informatics",
      institution: "Nile University",
      location: "Giza, Egypt",
      year: "2021-2025",
      description: "Relevant coursework: Data Structures, Algorithms, Database Management, Software Engineering, Biomedical Informatics, Artificial Intelligence, Machine Learning, Deep Learning, Computer Vision, Natural Language Processing, Computer Networks, Operating Systems, Computer Architecture, Computer Organization, Computer Security, Computer Graphics, Computer Systems, Computer Networks, Operating Systems, Computer Architecture, Computer Organization, Computer Security, Computer Graphics, Computer Systems",
      images: [
        {
          url: "https://www.nu.edu.eg/sites/default/files/2024-06/whatsapp_image_2024-06-25_at_1.33.17_pm.jpeg",
          alt: "Nile University",
          description: "Nile University Campus"
        }
      ]
    }
  ],
  courses: [
    {
      title: "IOT",
      description: "IOT course",
      institution: "ITI",
      location: "Cairo, Egypt",
      year: "2023-2024",
      images: [
        {
          url: "https://iti.gov.eg/assets/images/ColoredLogo.svg",
          alt: "ITI"
          // description: "ITI Campus"
        }
      ]
    },
    {
      title: ".NET full stack course",
      description: ".NET full stack course",
      institution: "Digital Egypt Pioneers Initiative - DEPI",
      location: "Cairo, Egypt",
      year: "2024",
      images: [
        {
          url: "https://depi.gov.eg/assets/images/proAr.png",
          alt: "DEPI"
          // description: "DEPI Logo"
        }
      ]
    }
  ],
  skills: [
    "C#",
    "ASP.NET Core",
    "Entity Framework",
    "SQL Server",
    "C++",
    "Python",
    "Java",
    "Spring Boot",
    "Hibernate",
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "Docker",
    "MongoDB",
    "SQL Server",
    "MySQL",
    "PostgreSQL",
    "Docker"
  ],
  extraCurricularRoles: [
    {
      role: "Vice President",
      institution: "NUICPC",
      location: "Nile University",
      year: "2023-2024",
      images: [
        {
          url: "https://i.ibb.co/FbSmTsBw/486635391-1079182187577545-400541279663759578-n.jpg",
          alt: "NUICPC"
          // description: "NUICPC Campus"
        },
        {
          url: "https://i.ibb.co/1fLrcywC/487093779-1079182100910887-5326561587880729477-n.jpg",
          alt: "NUICPC"
          // description: "NUICPC Campus"
        },
        {
          url: "https://i.ibb.co/mVJBpngp/486181151-1075334944628936-2845216629795518112-n.jpg",
          alt: "NUICPC"
          // description: "NUICPC Campus"
        },
        {
          url: "https://i.ibb.co/yn7ccHM1/486507182-1075334774628953-7774379668898780058-n.jpg",
          alt: "NUICPC"
          // description: "NUICPC Campus"
        },
        {
          url: "https://i.ibb.co/35xMtCDV/486104871-1075333997962364-6362307301859416001-n.jpg",
          alt: "NUICPC"
          // description: "NUICPC Campus"
        },
        {
          url: "https://i.ibb.co/fzL5qvvS/486248194-1074582274704203-6554786202979315108-n.jpg",
          alt: "NUICPC"
          // description: "NUICPC Campus"
        },
        {
          url: "https://i.ibb.co/VYxSXZF5/483525641-1070070571822040-3631060112169135578-n.jpg",
          alt: "NUICPC"
          // description: "NUICPC Campus"
        }
      ]
    },
    {
      role: "Head of SWE Committee",
      institution: "GDG Nile University",
      location: "Nile University",
      year: "2024-2025",
      images: [
        {
          url: "https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/487392755_1081523057343458_8188220183188100569_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=FLS-aCW1uJUQ7kNvwGbXwyf&_nc_oc=AdlFYb4-vwoTMNuaHrlFgSR161QWwnQ7VtWfb-8Y_JyoVI37WuwF6Qwu3I3tjawZM10&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&_nc_gid=l69wa6Aj6hbCl-b5xEZigg&oh=00_AfHAACCAl3WKApFTelz0kJWcQbEIeAxPXnHV1WHsRoCEJA&oe=6806DA4B",
          alt: "Nile University",
          description: "Nile University Campus"
        }
      ]
    },
    {
      role: "Member and Mentor",
      institution: "NUICPC",
      location: "Nile University",
      year: "2021-2024",
      images: [
        {
          url: "https://i.ibb.co/Y43vdxrV/484501388-1069637098532054-11435862832739630-n.jpg",
          alt: "NUICPC"
        },
        {
          url: "https://i.ibb.co/WWBPM6GG/484804363-1069556495206781-5476304623000762204-n.jpg",
          alt: "Nile University"
          // description: "Nile University Campus"
        },
        {
          url: "https://i.ibb.co/wNFg7VkR/484643522-1069479561881141-6397451359649224021-n.jpg",
          alt: "Nile University"
          // description: "Nile University Campus"
        },
        {
          url: "https://i.ibb.co/ZR4dJLyv/482238905-1065269192302178-4747858326277637907-n.jpg",
          alt: "NUICPC"
        },
        {
          url: "https://i.ibb.co/ymJN2v00/482246774-1065269122302185-3150232388297078773-n.jpg",
          alt: "NUICPC"
        },
        {
          url: "https://i.ibb.co/vxYBzH64/482027750-1063466179149146-4344066305683793822-n.jpg",
          alt: "NUICPC"
        },
        {
          url: "https://i.ibb.co/j9K3Smq8/481466571-1061263352702762-7633575959379424468-n.jpg",
          alt: "NUICPC"
        },
        {
          url: "https://i.ibb.co/S7R12bRy/484136881-1069556391873458-1395371296655723435-n.jpg",
          alt: "NUICPC"
        },
        {
          url: "https://i.ibb.co/zWVHwSPH/484516365-1070411428454621-8390835945290794938-n.jpg",
          alt: "NUICPC"
        },
        {
          url: "https://i.ibb.co/27L4bpQY/484381461-1069479998547764-3349306911678016045-n.jpg",
          alt: "NUICPC"
        },
        {
          url: "https://i.ibb.co/wNFg7VkR/484643522-1069479561881141-6397451359649224021-n.jpg",
          alt: "NUICPC"
        },
        {
          url: "https://i.ibb.co/MyFj8V6s/484140894-1069479545214476-3560564697839847145-n.jpg",
          alt: "NUICPC"
        },
        {
          url: "https://i.ibb.co/Sw9psfwX/484640131-1069484585213972-5052989750649951025-n.jpg",
          alt: "NUICPC"
        },
        {
          url: "https://i.ibb.co/v6QLXpqg/486627143-1081260057369758-4195012303656403802-n.jpg",
          alt: "NUICPC"
        },
        {}
      ]
    },
    {
      role: "Member",
      institution: "TEDxNU",
      location: "Nile University",
      year: "2021-2022",
      images: [
        {
          url: "https://www.nu.edu.eg/sites/default/files/2024-06/whatsapp_image_2024-06-25_at_1.33.17_pm.jpeg",
          alt: "Nile University",
          description: "Nile University Campus"
        }
      ]
    }
  ],
  extraCurricularActivities: [
    {
      title: "Head of IT & Cheating Control Committee",
      description: "NUCPA",
      institution: "NUCPA",
      location: "Nile University",
      year: "2025",
      images: [
        {
          url: "https://i.ibb.co/N6FsYfLW/NP100582-2.jpg",
          alt: "Nile University",
          description: "Nile University Campus"
        },
        {
          url: "https://i.ibb.co/355vdbMJ/NP109982-1.jpg",
          alt: "Nile University",
          description: "Nile University Campus"
        },
        {
          url: "https://i.ibb.co/Frhbfyq/NP100626-2-1.jpg",
          alt: "Nile University",
          description: "Nile University Campus"
        }
      ]
    },
    {
      title: "SWE Sessions",
      institution: "GDG Nile University",
      location: "Nile University",
      year: "2025",
      images: [
        {
          url: "https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/487509808_1082047970624300_6971553578124341594_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=aHeR-Y9xLCoQ7kNvwEt75GT&_nc_oc=AdmO0ISS5S83f5_spVUXrCY5OhawFzqurVuym-4vhEnrUw3H4-jlAWwwPr51_y97zEE&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&_nc_gid=yluqC4DSHyLfMjmLwL8hWA&oh=00_AfHf2HeyPANMbQPqIrHx24nzfxeuQkMaeMbP9SlpaTW-gg&oe=6806D086",
          alt: "Nile University",
          description: "Nile University Campus"
        }
      ]
    },
    {
      title: "NUICPC Problem Solving Sessions",
      description: "Mentored students in problem solving and competitive programming, started as a member and became a mentor, from level 0 to level 2, and helped them to qualify for the ECPC Finals",
      institution: "NUICPC",
      location: "Nile University",
      year: "2022-2025",
      images: [
        {
          url: "https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/486652074_1077701407725623_8749819316280105843_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=925gSLld9YIQ7kNvwH1Tnis&_nc_oc=AdkNGFJJzloJMZ7UyMqzyxpop7LgOAS4wDf37phzksSB9zyg6YYoJn9DvQBkTRCPe3c&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&_nc_gid=2jkQxIt1NA2bEK9hDA_sLw&oh=00_AfEFWMQ8TXpm7J7GNg31NTQtj51-xBK0gA96v3e3FXFOXw&oe=6806D41D",
          alt: "Nile University",
          description: "Nile University Campus"
        },
        {
          url: "https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/487509808_1082047970624300_6971553578124341594_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=aHeR-Y9xLCoQ7kNvwEt75GT&_nc_oc=AdmO0ISS5S83f5_spVUXrCY5OhawFzqurVuym-4vhEnrUw3H4-jlAWwwPr51_y97zEE&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&_nc_gid=yluqC4DSHyLfMjmLwL8hWA&oh=00_AfHf2HeyPANMbQPqIrHx24nzfxeuQkMaeMbP9SlpaTW-gg&oe=6806D086",
          alt: "Nile University",
          description: "Nile University Campus"
        },
        {
          url: "https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/484516365_1070411428454621_8390835945290794938_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=eGV6obo35CwQ7kNvwEna_H_&_nc_oc=AdkJaDZSOxHorBC4LMHappVliFJtwF5f7D8dyRSgS9Dn6aLdg1YEnE6taP2Ig3sbyQs&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&_nc_gid=mEX3OZGsZeCySB76oTVkRQ&oh=00_AfEuFzuaNHYsYm3DLGnEWPCQYRyyQfVNh64r__8G_DKNaA&oe=6806E9D5",
          alt: "Nile University",
          description: "Nile University Campus"
        }
      ]
    }
  ],
  competitions: [
    {
      title: "UGRF 19th Edition",
      description: "UGRF 19th Edition",
      achievement: "1st Place at the 19th UGRF! 'Enhancing Readibility of Faded Text in Historical Documents Using Image Processing Techniques'",
      year: "2025",
      images: [
        {
          url: "https://i.ibb.co/ks3fxrrm/1738247199943-e-1747872000-v-beta-t-h-XQ9njs-NIMHBp-SUTY26bge-Vx-Zj-EXS4mz2rhth-Jk-Ym-M.jpg",
          alt: "UGRF",
          description: "Team Photo"
        },
        {
          url: "https://i.ibb.co/dsMPdbzF/1738247190983.jpg",
          alt: "UGRF",
          description: "UGRF Certificate"
        },
        {
          url: "https://i.ibb.co/4wbzcM7j/1738247196516-e-1747872000-v-beta-t-8-TWVb-MGq-Elw-QW8-Jn-Ej-JMa-Yo-KPdy6-ZOl-Nwxn-GW-TMCY.jpg",
          alt: "UGRF",
          description: "Team Photo"
        }
      ]
    },
    {
      title: "Dean's Honors",
      description: "Dean's Honors",
      achievement: "Made the Dean's List for the Fall 2024 semester",
      year: "2024",
      images: [
        {
          url: "https://i.ibb.co/k2jWyBVz/468465943-17952654941854972-3647153475567609171-n.jpg",
          alt: "Dean's Honors",
          description: "Dean's Honors"
        }
      ]
    },
    {
      title: "Nile University Innovation Competition",
      description: "Nile University Innovation Competition",
      achievement: "Secured second place in the Nile University Innovation Competition hosted by Nile University - NilePreneurs and NU E-Club ! 🎉🏆",
      year: "2025",
      images: [
        {
          url: "https://i.ibb.co/HfGLHCQn/1723818852840.jpg",
          alt: "NUIC"
          // description: "NUIC Certificate"
        },
        {
          url: "https://i.ibb.co/VcyKywY4/1723818852069.jpg",
          alt: "NUIC"
          // description: "NUIC Certificate"
        }
      ]
    },
    {
      title: "ECPC",
      description: "Egyptian Collegiate Programming Contest",
      achievement: "Rank 3rd in my third year at NU and qualified for the ECPC Finals",
      year: "2024",
      images: [
        {
          url: "https://i.ibb.co/N2RZwmKT/487497338-1081518670677230-8143431170413885977-n.jpg",
          alt: "ECPC",
          description: "ECPC Certificate"
        }
      ]
    },
    {
      title: "UGRF 17th Edition",
      description: "UGRF 17th Edition",
      achievement: "2nd place SWE for PregTracker- personalized pregnancy tracker ",
      year: "2024",
      images: [
        {
          url: "https://i.ibb.co/N2qgnb92/1706802292377.jpg",
          alt: "UGRF",
          description: "UGRF Certificate"
        }
      ]
    },
    {
      title: "UGRF 17th Edition",
      description: "UGRF 17th Edition",
      achievement: " 2nd place Clinical informatics for Recover360- an advanced physiotherapy clinic management system",
      year: "2024",
      images: [
        {
          url: "https://i.ibb.co/N2qgnb92/1706802292377.jpg",
          alt: "UGRF",
          description: "UGRF Certificate"
        },
        {
          url: "https://i.ibb.co/SkfYGDv/1706802293048.jpg",
          alt: "UGRF",
          description: "UGRF Certificate"
        }
      ]
    },
    {
      title: "ECPC",
      description: "Egyptian Collegiate Programming Contest",
      achievement: "Rank 7th in my first year at NU",
      year: "2022",
      images: [
        {
          url: "https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/482277706_1065267045635726_1956241697864875127_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=86c6b0&_nc_ohc=1ylVvYBsad4Q7kNvwGOE6DO&_nc_oc=Adltzr1B7OJ92p1jCzivnB0WvixF4DyE-MwQ8qhS7qD8G9fxDmbN3X5qcvrYuUyQ87Q&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&_nc_gid=3tU8CVtPMYaAEAoV-DVUcQ&oh=00_AfFICX7UOYGbZ01o2DP1U4nOfR4p6P7RUv0AhILIPAql_g&oe=6806DF27",
          alt: "ECPC"
          // description: "ECPC Certificate"
        }
      ]
    },
    {
      title: "ECPC",
      description: "Egyptian Collegiate Programming Contest",
      achievement: "Rank 5th in my second year at NU",
      year: "2023",
      images: [
        {
          url: "https://i.ibb.co/NnWkjG8g/486719077-1079195597576204-1921460299948979682-n.jpg",
          alt: "ECPC"
          // description: "ECPC Certificate"
        }
      ]
    },
    {
      title: "EOI",
      description: "Egyptian Olympiad in Informatics",
      achievement: "Rank 51 in Egypt",
      year: "2015",
      images: [
        {
          url: "https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/462316142_7913407118761100_685588124196353855_n.png?_nc_cat=101&ccb=1-7&_nc_sid=86c6b0&_nc_ohc=7cOAfEscTtUQ7kNvwHHXc59&_nc_oc=AdmZ1IgqnVQhS5ZJxSMlE7VO5h2GwBnOM_SaQ_mXEGhRayrAdbc7l7wIrObBPOGqo6k&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&_nc_gid=LBTKldq_gsmdhFQ--n6Q6g&oh=00_AfFvKYIPxae6llKl_VT17dG5zIDCLOkf2EigX7n6x00G-g&oe=680AC3F6",
          alt: "EOI"
          // description: "EOI Certificate"
        }
      ]
    },
    {
      title: "RoboCup",
      description: "RoboCup",
      achievement: "Rank 10th in Egypt",
      year: "2016",
      images: [
        {
          url: "https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/462316142_7913407118761100_685588124196353855_n.png?_nc_cat=101&ccb=1-7&_nc_sid=86c6b0&_nc_ohc=7cOAfEscTtUQ7kNvwHHXc59&_nc_oc=AdmZ1IgqnVQhS5ZJxSMlE7VO5h2GwBnOM_SaQ_mXEGhRayrAdbc7l7wIrObBPOGqo6k&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&_nc_gid=LBTKldq_gsmdhFQ--n6Q6g&oh=00_AfFvKYIPxae6llKl_VT17dG5zIDCLOkf2EigX7n6x00G-g&oe=680AC3F6",
          alt: "RoboCup"
          // description: "RoboCup Certificate"
        }
      ]
    }
  ],
  // Professional Experience
  experience: [
    {
      title: "Academy Full Stack Developer",
      company: "Luftborn",
      location: "Cairo, Egypt",
      period: "July 2024 - October 2024",
      description: "Working on a full stack web application for a client using Angular, React, .NET, Entity Framework, SQL Server, Bootstrap, and jQuery.",
      technologies: [".NET", "Entity Framework", "SQL Server", "Angular", "React", "Bootstrap", "jQuery"],
      images: [
        {
          url: "https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/277727078_119097457389244_7717309927402528390_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=rvNpB-9dCAoQ7kNvwHeda0X&_nc_oc=Adk8Qg0h-4iVQGhQc5-3sXR9TAe3QxNy92vyJ3G7dWl2r0Is9MhcHn2t3A7PDOe4Qvk&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&_nc_gid=oM0aNre6tagZivjrXfzsVA&oh=00_AfHRaHWXsIyHB16sr_Oi3DiU-tA--5cznxWLBv0Cwpg8rg&oe=6806F746",
          alt: "Luftborn"
          // description: "Luftborn Logo"
        }
      ]
    },
    {
      title: "Junior Research Assistant",
      company: "Nile University",
      location: "Cairo, Egypt",
      period: "Summer 2023",
      description: "Assisted in the development of internal software tools using ASP.NET Core. Implemented new features and fixed bugs in existing applications.",
      technologies: ["C#", "ASP.NET Core", "Entity Framework", "SQL Server", "Bootstrap"],
      images: [
        {
          url: "https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/472203136_910754741241302_6191814665042927988_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Za97Y-3hoJoQ7kNvwF4tk1J&_nc_oc=AdkqMOqp7uGvmr5oQdXYQGl081OjyX3ZSV0sd8wSjmufGHxR2bTsh0LiY9NMw2vsg38&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&_nc_gid=GY4OjmS0blsyGjzyS8wFjQ&oh=00_AfENYmSgWzpYXUFe77GQh_u3yM2O6_tMVQR7Rp3mzfbUJw&oe=6806D215",
          alt: "NU Research"
          // description: "Working on .NET projects during the internship"
        }
      ]
    },
    {
      title: "Junior Teaching Assistant",
      company: "Nile University",
      location: "Cairo, Egypt",
      period: "Spring 2022, Fall 2022, Spring 2023, Fall 2023, Spring 2024",
      description: "Assisted in teaching courses to students, helped them with their assignments and projects, and graded their exams and assignments.",
      technologies: ["C++", "C#", "Java", "Python", "SQL", "HTML", "CSS", "JavaScript", "React", "MongoDB", "MySQL", "Docker"],
      images: [
        {
          url: "https://top50women.com/wp-content/uploads/2023/08/Nile-university-1.jpg",
          alt: "Nile University"
          // description: "Working on .NET projects during the internship"
        }
      ]
    }
  ],
  // SEO Configuration
  seo: {
    title: "Abdelrahman Saleh - Software Developer",
    description: "Software Developer based in Egypt specializing in React, Node.js, and modern web technologies"},
  // Theme Configuration
  theme: {
    // Spotify green
    secondaryColor: "#1d1d1f"},
  // Projects Configuration
  projects: [
    scheds,
    portfolio,
    foodies,
    fadedTextRestoration,
    nucpaBalloons,
    nucpaBalloonsApi,
    neurospeccompanionmerged,
    clinicalmain,
    seatReservation
    // Add more projects here
  ]
};

const $$Astro$3 = createAstro("https://example.com");
const $$BaseHead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const backgrounds = await Promise.all([
    getImage({ src: macBackground1, width: 3500 }),
    getImage({ src: macBackground3, width: 3500 }),
    getImage({ src: macBackground3, width: 3500 })
  ]);
  return renderTemplate`<!-- Core meta tags --><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"><meta name="author"${addAttribute(userConfig.name, "content")}><!-- SEO Configuration -->${renderComponent($$result, "AstroSeo", $$AstroSeo, { "title": Astro2.props.title || userConfig.seo.title, "description": Astro2.props.description || userConfig.seo.description, "canonical": Astro2.props.canonical || userConfig.website, "openGraph": {
    url: Astro2.props.openGraph?.url || userConfig.website,
    title: Astro2.props.openGraph?.title || userConfig.seo.title,
    description: Astro2.props.openGraph?.description || userConfig.seo.description,
    images: [
      {
        url: ""
        // og image here
      }
    ],
    site_name: Astro2.props.openGraph?.site_name || userConfig.name
  } })}<!-- Add your favicon files in public/images/ --><link rel="apple-touch-icon" sizes="180x180" href="https://avatars.githubusercontent.com/u/97130221?s=400&u=aaa4eb0bf9d07b901f0b15df8540fefea2fca729&v=4"><link rel="icon" type="image/png" sizes="32x32" href="https://avatars.githubusercontent.com/u/97130221?s=400&u=aaa4eb0bf9d07b901f0b15df8540fefea2fca729&v=4"><link rel="icon" type="image/png" sizes="16x16" href="https://avatars.githubusercontent.com/u/97130221?s=400&u=aaa4eb0bf9d07b901f0b15df8540fefea2fca729&v=4"><!-- Theme colors for browsers --><meta name="msapplication-TileColor"${addAttribute(userConfig.theme.secondaryColor, "content")}><meta name="theme-color"${addAttribute(userConfig.theme.secondaryColor, "content")}><!-- Auto-generated sitemap --><link rel="sitemap" href="/sitemap-index.xml"><!-- Preload background images for performance -->${backgrounds.map((bg) => renderTemplate`<link rel="preload"${addAttribute(bg.src, "href")} as="image" type="image/webp" fetchpriority="high">`)}`;
}, "C:/Users/002/source/repos/portfolio/src/components/global/BaseHead.astro", void 0);

const $$Astro$2 = createAstro("https://example.com");
const $$Index$2 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$2;
  const propsStr = JSON.stringify(Astro2.props);
  const paramsStr = JSON.stringify(Astro2.params);
  return renderTemplate`${renderComponent($$result, "vercel-analytics", "vercel-analytics", { "data-props": propsStr, "data-params": paramsStr, "data-pathname": Astro2.url.pathname })} ${renderScript($$result, "C:/Users/002/source/repos/portfolio/node_modules/@vercel/analytics/dist/astro/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/002/source/repos/portfolio/node_modules/@vercel/analytics/dist/astro/index.astro", void 0);

const $$Astro$1 = createAstro("https://example.com");
const $$Index$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  const propsStr = JSON.stringify(Astro2.props);
  const paramsStr = JSON.stringify(Astro2.params);
  return renderTemplate`${renderComponent($$result, "vercel-speed-insights", "vercel-speed-insights", { "data-props": propsStr, "data-params": paramsStr, "data-pathname": Astro2.url.pathname })} ${renderScript($$result, "C:/Users/002/source/repos/portfolio/node_modules/@vercel/speed-insights/dist/astro/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/002/source/repos/portfolio/node_modules/@vercel/speed-insights/dist/astro/index.astro", void 0);

const $$Astro = createAstro("https://example.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en" class="scroll-smooth selection:bg-gray-900 selection:text-white overflow-x-hidden"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": Astro2.props.title, "description": Astro2.props.description, "canonical": Astro2.props.canonical, "openGraph": Astro2.props.openGraph })}${renderComponent($$result, "Analytics", $$Index$2, {})}${renderComponent($$result, "SpeedInsights", $$Index$1, {})}${renderHead()}</head> <body class="overflow-x-hidden bg-gray-900"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/002/source/repos/portfolio/src/layouts/Layout.astro", void 0);

function HelpModal({
  isOpen,
  onClose,
  onTerminalClick
}) {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      setActiveStep(0);
    }
  }, [isOpen]);
  const steps = [
    {
      title: "Welcome to My Portfolio!",
      content: "This is a macOS-inspired portfolio with interactive features. Let me show you around!",
      animation: "animate-fade-in",
      button: null
    },
    {
      title: "The Terminal",
      content: "The MacTerminal is your AI-powered assistant. Ask it anything about me, my skills, or my experience!",
      animation: "animate-slide-in-right",
      button: {
        text: "Open Terminal",
        icon: /* @__PURE__ */ jsx(RiTerminalFill, { size: 20 }),
        onClick: () => {
          if (onTerminalClick) {
            onTerminalClick();
            handleClose();
          }
        }
      }
    },
    {
      title: "Desktop Dock",
      content: "The dock at the bottom contains all the main features of my portfolio. Each icon represents a different section:",
      animation: "animate-slide-in-left",
      button: null,
      features: [
        { icon: /* @__PURE__ */ jsx(BsGithub, { size: 20 }), text: "GitHub Projects" },
        { icon: /* @__PURE__ */ jsx(BsStickyFill, { size: 20 }), text: "Resume Notes" },
        { icon: /* @__PURE__ */ jsx(BsFilePdf, { size: 20 }), text: "Resume Viewer" },
        { icon: /* @__PURE__ */ jsx(BsCalendar, { size: 20 }), text: "Schedule a Call" },
        { icon: /* @__PURE__ */ jsx(BsSpotify, { size: 20 }), text: "Spotify Playlist" },
        { icon: /* @__PURE__ */ jsx(FaLink, { size: 20 }), text: "Contact Links" },
        { icon: /* @__PURE__ */ jsx(RiTerminalFill, { size: 20 }), text: "Terminal" }
      ]
    },
    {
      title: "Menu Bar",
      content: "Use the menu bar to access my resume, projects, and contact information. Hover over my name to see a special surprise!",
      animation: "animate-slide-in-up",
      button: null
    }
  ];
  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };
  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prev) => prev + 1);
    } else {
      handleClose();
    }
  };
  if (!isOpen) return null;
  return /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 z-[100] flex items-center justify-center overflow-hidden", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300",
        style: { opacity: isVisible ? 1 : 0 },
        onClick: handleClose
      }
    ),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: `relative bg-gray-900/95 rounded-lg p-6 max-w-md w-full mx-4 transform transition-all duration-300 ${isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"}`,
        children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: handleClose,
              className: "absolute top-4 right-4 text-gray-400 hover:text-white transition-colors",
              children: /* @__PURE__ */ jsx(IoClose, { size: 24 })
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: `${steps[activeStep].animation} mb-4`, children: [
            /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-white mb-2", children: steps[activeStep].title }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-300 mb-4", children: steps[activeStep].content }),
            steps[activeStep].features && /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-4 mt-4", children: steps[activeStep].features.map((feature, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gray-300", children: [
              /* @__PURE__ */ jsx("div", { className: "text-white", children: feature.icon }),
              /* @__PURE__ */ jsx("span", { children: feature.text })
            ] }, index)) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mt-6", children: [
            /* @__PURE__ */ jsx("div", { className: "flex space-x-2", children: steps.map((_, index) => /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => setActiveStep(index),
                className: `w-2 h-2 rounded-full transition-colors ${index === activeStep ? "bg-white" : "bg-gray-600"}`
              },
              index
            )) }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
              steps[activeStep].button && /* @__PURE__ */ jsxs(
                "button",
                {
                  onClick: steps[activeStep].button?.onClick,
                  className: "px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition-colors flex items-center gap-2",
                  children: [
                    steps[activeStep].button?.icon,
                    steps[activeStep].button?.text
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: handleNext,
                  className: "px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors",
                  children: activeStep === steps.length - 1 ? "Got it!" : "Next"
                }
              )
            ] })
          ] })
        ]
      }
    )
  ] });
}

function MacToolbar({
  onTerminalClick,
  onShowTutorial
}) {
  const [currentDateTime, setCurrentDateTime] = useState(/* @__PURE__ */ new Date());
  const [activeMenu, setActiveMenu] = useState(null);
  const [showSignature, setShowSignature] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const menuRef = useRef(null);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(/* @__PURE__ */ new Date());
    }, 6e4);
    return () => clearInterval(timer);
  }, []);
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActiveMenu(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const formatMacDate = (date) => {
    const weekday = date.toLocaleString("en-US", { weekday: "short" });
    const month = date.toLocaleString("en-US", { month: "short" });
    const day = date.getDate();
    const hour = date.toLocaleString("en-US", {
      hour: "numeric",
      hour12: true
    });
    const minute = date.getMinutes().toString().padStart(2, "0");
    const period = date.getHours() >= 12 ? "PM" : "AM";
    return `${weekday} ${month} ${day} ${hour.replace(
      /\s?[AP]M/,
      ""
    )}:${minute} ${period}`;
  };
  const formatIPhoneTime = (date) => {
    let hour = date.getHours();
    const minute = date.getMinutes().toString().padStart(2, "0");
    hour = hour % 12;
    hour = hour ? hour : 12;
    return `${hour}:${minute}`;
  };
  const handleVSCodeClick = () => {
    window.location.href = "vscode:/";
  };
  const handleMenuClick = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };
  const handleAction = (action) => {
    if (action) {
      action();
      setActiveMenu(null);
    }
  };
  const menus = {
    File: [
      {
        label: "Resume",
        icon: /* @__PURE__ */ jsx(IoDocumentText, { size: 16 }),
        action: () => window.open(userConfig.resume.url, "_blank")
      },
      {
        label: "Projects",
        icon: /* @__PURE__ */ jsx(IoCodeSlash, { size: 16 }),
        action: () => window.open(userConfig.social.github, "_blank")
      }
    ],
    Edit: [
      {
        label: "Copy Email",
        icon: /* @__PURE__ */ jsx(IoMail, { size: 16 }),
        action: () => {
          navigator.clipboard.writeText(userConfig.contact.email);
          alert("Email copied to clipboard!");
        }
      },
      {
        label: "Copy Phone",
        icon: /* @__PURE__ */ jsx(IoCall, { size: 16 }),
        action: () => {
          navigator.clipboard.writeText(userConfig.contact.phone);
          alert("Phone number copied to clipboard!");
        }
      }
    ],
    View: [
      {
        label: "About Me",
        icon: /* @__PURE__ */ jsx(IoPerson, { size: 16 }),
        submenu: [
          {
            label: "Education",
            icon: /* @__PURE__ */ jsx(IoSchool, { size: 16 }),
            action: () => window.scrollTo({ top: 0, behavior: "smooth" })
          },
          {
            label: "Experience",
            icon: /* @__PURE__ */ jsx(IoBriefcase, { size: 16 }),
            action: () => window.scrollTo({ top: 0, behavior: "smooth" })
          }
        ]
      }
    ],
    Go: [
      {
        label: "GitHub",
        icon: /* @__PURE__ */ jsx(FaGithub, { size: 16 }),
        action: () => window.open(userConfig.social.github, "_blank")
      },
      {
        label: "LinkedIn",
        icon: /* @__PURE__ */ jsx(FaLinkedin, { size: 16 }),
        action: () => window.open(userConfig.social.linkedin, "_blank")
      },
      {
        label: "Email",
        icon: /* @__PURE__ */ jsx(FaEnvelope, { size: 16 }),
        action: () => window.open(`mailto:${userConfig.contact.email}`)
      }
    ],
    Help: [
      {
        label: "Show Help",
        icon: /* @__PURE__ */ jsx(IoHelpCircle, { size: 16 }),
        action: () => setShowHelp(true)
      },
      {
        label: "Show Tutorial",
        icon: /* @__PURE__ */ jsx(IoHelpCircle, { size: 16 }),
        action: () => onShowTutorial?.()
      }
    ]
  };
  const renderMenu = (menuItems) => /* @__PURE__ */ jsx("div", { className: "absolute top-full left-0 mt-1 bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-xl py-1 min-w-[200px]", children: menuItems.map((item, index) => /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => handleAction(item.action),
        className: "w-full px-4 py-2 text-left text-sm text-gray-200 hover:bg-gray-700/50 flex items-center gap-2",
        children: [
          item.icon,
          item.label
        ]
      }
    ),
    item.submenu && /* @__PURE__ */ jsx("div", { className: "absolute left-full top-0 ml-1 bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-xl py-1 min-w-[200px]", children: item.submenu.map((subItem, subIndex) => /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => handleAction(subItem.action),
        className: "w-full px-4 py-2 text-left text-sm text-gray-200 hover:bg-gray-700/50 flex items-center gap-2",
        children: [
          subItem.icon,
          subItem.label
        ]
      },
      subIndex
    )) })
  ] }, index)) });
  return /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsx(
      HelpModal,
      {
        isOpen: showHelp,
        onClose: () => setShowHelp(false),
        onTerminalClick
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "sticky top-0 z-50 md:hidden bg-transparent text-white h-12 px-8 flex items-center justify-between text-base font-medium", children: [
      /* @__PURE__ */ jsx("span", { className: "font-semibold", children: formatIPhoneTime(currentDateTime) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsx(IoCellular, { size: 20 }),
        /* @__PURE__ */ jsx(MdWifi, { size: 20 }),
        /* @__PURE__ */ jsx(IoBatteryHalfOutline, { size: 24 })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "sticky top-0 z-50 hidden md:flex bg-black/20 backdrop-blur-md text-white h-6 px-4 items-center justify-between text-sm", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4", ref: menuRef, children: [
        /* @__PURE__ */ jsx(FaApple, { size: 16 }),
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx(
            "span",
            {
              className: "font-semibold hover:text-gray-300 transition-colors cursor-pointer",
              onMouseEnter: () => setShowSignature(true),
              onMouseLeave: () => setShowSignature(false),
              children: userConfig.name
            }
          ),
          showSignature && /* @__PURE__ */ jsx("div", { className: "absolute top-full left-0 mt-1 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-xl z-[100]", children: /* @__PURE__ */ jsxs("svg", { width: "100", height: "100", viewBox: "0, 0, 400, 400", children: [
            /* @__PURE__ */ jsx(
              "path",
              {
                d: "M108.569 28.616 C 106.734 29.520,104.726 32.670,104.726 34.644 C 104.726 38.003,107.697 39.449,129.820 46.856 C 138.973 49.921,146.527 52.624,146.607 52.863 C 146.686 53.103,145.246 54.959,143.407 56.989 C 124.286 78.087,112.615 112.565,116.576 136.249 C 121.489 165.623,141.596 190.907,170.380 203.907 C 201.975 218.177,230.960 211.170,260.824 182.042 C 284.512 158.939,290.778 139.488,280.920 119.660 C 270.945 99.596,249.140 84.175,202.030 63.867 C 186.951 57.368,185.093 56.168,184.311 52.432 C 182.587 44.191,177.239 42.165,164.583 44.957 L 158.844 46.223 143.978 40.267 C 114.671 28.527,111.121 27.359,108.569 28.616",
                fill: "#000000",
                fillRule: "evenodd"
              }
            ),
            /* @__PURE__ */ jsx(
              "path",
              {
                d: "M180.151 221.586 C 172.696 224.807,172.098 228.567,174.461 257.349 C 174.970 263.548,175.907 275.255,176.544 283.365 C 178.911 313.539,179.680 321.150,182.081 338.170 C 184.544 355.633,187.406 371.811,191.197 389.698 L 193.381 400.000 197.635 400.000 C 200.789 400.000,201.890 399.878,201.888 399.527 C 201.887 399.267,201.202 395.907,200.368 392.060 C 192.002 353.514,189.396 329.312,189.405 290.237 C 189.410 264.279,189.932 256.659,192.688 242.344 C 194.647 232.170,194.659 230.718,192.822 226.985 C 190.108 221.473,185.228 219.393,180.151 221.586",
                fill: "#000000",
                fillRule: "evenodd"
              }
            ),
            /* @__PURE__ */ jsx(
              "path",
              {
                d: "M128.922 258.062 C 123.505 260.577,122.583 263.116,120.614 280.942 C 119.089 294.757,117.420 307.080,113.605 332.703 C 107.161 375.986,107.138 376.412,111.110 378.748 C 113.415 380.103,117.666 380.230,119.324 378.994 C 121.925 377.054,122.361 375.086,123.624 359.546",
                fill: "#000000",
                fillRule: "evenodd"
              }
            ),
            /* @__PURE__ */ jsx("g", { className: "origin-top animate-wave", children: /* @__PURE__ */ jsx(
              "path",
              {
                d: "M279.276 172.949 C 276.309 174.007,275.334 176.072,272.211 187.925 C 263.640 220.452,251.678 249.700,242.532 260.491 C 241.563 261.635,237.066 266.399,232.538 271.078 C 218.672 285.408,217.752 286.587,217.798 289.961 C 217.940 300.352,231.821 304.008,237.316 295.101 C 238.091 293.845,240.750 290.301,243.225 287.227 C 251.656 276.753,256.254 268.957,261.554 256.144 C 271.645 231.748,288.332 185.082,289.049 179.249 C 289.586 174.884,283.980 171.271,279.276 172.949",
                fill: "#000000",
                fillRule: "evenodd"
              }
            ) })
          ] }) })
        ] }),
        Object.entries(menus).map(([menu, items]) => /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx(
            "span",
            {
              className: "cursor-pointer hover:text-gray-300 transition-colors",
              onClick: () => handleMenuClick(menu),
              children: menu
            }
          ),
          activeMenu === menu && renderMenu(items)
        ] }, menu))
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ jsx(
          VscVscode,
          {
            size: 16,
            className: "cursor-pointer hover:opacity-80 transition-opacity",
            onClick: handleVSCodeClick,
            title: "Open in VSCode"
          }
        ),
        /* @__PURE__ */ jsx(MdWifi, { size: 16 }),
        /* @__PURE__ */ jsx(IoSearchSharp, { size: 16 }),
        /* @__PURE__ */ jsx("span", { className: "cursor-default", children: formatMacDate(currentDateTime) })
      ] })
    ] })
  ] });
}

let globalZIndex = 1e3;
const MIN_WIDTH = 400;
const MIN_HEIGHT = 300;
function DraggableWindow({
  title,
  onClose,
  children,
  initialPosition = { x: 0, y: 0 },
  initialSize = { width: 400, height: 300 },
  className = ""
}) {
  const [position, setPosition] = useState(initialPosition);
  const [size, setSize] = useState(initialSize);
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [resizeDirection, setResizeDirection] = useState(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [zIndex, setZIndex] = useState(globalZIndex);
  const [isMobile, setIsMobile] = useState(false);
  const windowRef = useRef(null);
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  const bringToFront = () => {
    globalZIndex += 1;
    setZIndex(globalZIndex);
  };
  const handleMouseDown = (e) => {
    if (isMobile) return;
    if (e.target instanceof HTMLElement) {
      bringToFront();
      if (e.target.closest(".window-header")) {
        setIsDragging(true);
        const rect = windowRef.current?.getBoundingClientRect();
        if (rect) {
          setDragOffset({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
          });
        }
        e.preventDefault();
      } else if (e.target.closest(".resize-handle")) {
        setIsResizing(true);
        setResizeDirection(e.target.getAttribute("data-direction"));
        e.preventDefault();
      }
    }
  };
  const handleMouseMove = (e) => {
    if (isMobile) return;
    if (isDragging) {
      const newX = e.clientX - dragOffset.x;
      const newY = e.clientY - dragOffset.y;
      const windowWidth = windowRef.current?.offsetWidth || 0;
      const windowHeight = windowRef.current?.offsetHeight || 0;
      const maxX = window.innerWidth - windowWidth / 2;
      const maxY = window.innerHeight - windowHeight / 2;
      const minX = -windowWidth / 2;
      const minY = -windowHeight / 2;
      setPosition({
        x: Math.max(minX, Math.min(newX, maxX)),
        y: Math.max(minY, Math.min(newY, maxY))
      });
    } else if (isResizing) {
      const rect = windowRef.current?.getBoundingClientRect();
      if (rect) {
        const newSize = { ...size };
        if (resizeDirection === "right" || resizeDirection === "bottom-right") {
          newSize.width = Math.max(MIN_WIDTH, e.clientX - rect.left);
        }
        if (resizeDirection === "bottom" || resizeDirection === "bottom-right") {
          newSize.height = Math.max(MIN_HEIGHT, e.clientY - rect.top);
        }
        setSize(newSize);
      }
    }
  };
  const handleMouseUp = () => {
    if (isMobile) return;
    setIsDragging(false);
    setIsResizing(false);
    setResizeDirection(null);
  };
  useEffect(() => {
    if (isMobile) return;
    if (isDragging || isResizing) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.body.style.userSelect = "none";
    }
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.body.style.userSelect = "";
    };
  }, [isDragging, isResizing, resizeDirection, dragOffset, isMobile]);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref: windowRef,
      className: `${isMobile ? "fixed inset-0 m-4 rounded-xl" : "absolute rounded-xl"} bg-[#1d1d1f] shadow-xl overflow-hidden p-0 transition-all duration-300 ${isDragging ? "cursor-grabbing" : "cursor-default"} ${className}`,
      style: {
        ...isMobile ? {} : {
          left: position.x,
          top: position.y,
          width: size.width,
          height: size.height
        },
        zIndex,
        transition: isDragging || isResizing ? "none" : "all 0.2s ease-out"
      },
      onMouseDown: handleMouseDown,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "window-header bg-gray-800 h-6 flex items-center space-x-2 px-4 rounded-t-xl sticky top-0 left-0 right-0 z-10", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: onClose,
              className: "w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded-full bg-yellow-500" }),
          /* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded-full bg-green-500" }),
          /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-300 flex-grow text-center font-semibold", children: title })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative h-[calc(100%-1.5rem)]", children: [
          children,
          !isMobile && /* @__PURE__ */ jsxs(Fragment$1, { children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "resize-handle absolute bottom-0 left-0 right-0 h-2 cursor-ns-resize",
                "data-direction": "bottom"
              }
            ),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "resize-handle absolute right-0 top-0 bottom-0 w-2 cursor-ew-resize",
                "data-direction": "right"
              }
            ),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "resize-handle absolute bottom-0 right-0 w-3 h-3 cursor-nwse-resize",
                "data-direction": "bottom-right"
              }
            )
          ] })
        ] })
      ]
    }
  );
}

const PLACEHOLDER_MESSAGES = [
  "Type your question...",
  "What are your skills?",
  "Where are you located?",
  "What projects have you worked on?"
];
function MacTerminal({ isOpen, onClose }) {
  const [chatHistory, setChatHistory] = useState({
    messages: [],
    input: ""
  });
  const [isTyping, setIsTyping] = useState(false);
  const [placeholder, setPlaceholder] = useState("");
  const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const messagesEndRef = useRef(null);
  useEffect(() => {
    let timeout;
    const currentMessage = PLACEHOLDER_MESSAGES[currentPlaceholderIndex];
    const animatePlaceholder = () => {
      if (isDeleting) {
        if (placeholder.length === 0) {
          setIsDeleting(false);
          setCurrentPlaceholderIndex(
            (prev) => (prev + 1) % PLACEHOLDER_MESSAGES.length
          );
          timeout = setTimeout(animatePlaceholder, 400);
        } else {
          setPlaceholder((prev) => prev.slice(0, -1));
          timeout = setTimeout(animatePlaceholder, 80);
        }
      } else {
        if (placeholder.length === currentMessage.length) {
          timeout = setTimeout(() => setIsDeleting(true), 1500);
        } else {
          setPlaceholder(currentMessage.slice(0, placeholder.length + 1));
          timeout = setTimeout(animatePlaceholder, 120);
        }
      }
    };
    timeout = setTimeout(animatePlaceholder, 100);
    return () => clearTimeout(timeout);
  }, [placeholder, isDeleting, currentPlaceholderIndex]);
  const welcomeMessage = `Welcome to My Portfolio

Name: ${userConfig.name}
Role: ${userConfig.role}
Location: ${userConfig.location}

Contact: ${userConfig.contact.email}
GitHub: ${userConfig.social.github}

Ask me anything!
`;
  const currentDate = /* @__PURE__ */ new Date();
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });
  const systemPrompt = `IMPORTANT: You ARE ${userConfig.name} themselves. You must always speak in first-person ("I", "my", "me"). Never refer to "${userConfig.name}" in third-person.
CURRENT DATE: ${formattedDate} - Always use this exact date when discussing the current date/year.

Example responses:
Q: "Where do you live?"
A: "I live in ${userConfig.location}"

Q: "What's your background?"
A: "I'm a ${userConfig.role} with a focus for ${userConfig.roleFocus}"

Q: "How old are you?"
A: "I'm ${userConfig.age} years old"

Core details about me:
- I'm ${userConfig.age} years old
- I live in ${userConfig.location}
- I'm a ${userConfig.role}
- My email is ${userConfig.contact.email}
- I was born in ${userConfig.location}

My technical expertise:
${userConfig.skills.map((skill) => `- ${skill}`).join("\n")}

My education:
- ${userConfig.education[0].degree} in ${userConfig.education[0].major}
- ${userConfig.education[0].institution}, ${userConfig.education[0].location} (${userConfig.education[0].year})

My professional experience:
${userConfig.experience.map((exp) => `- ${exp.title} at ${exp.company}, ${exp.location} (${exp.period})`).join("\n")}

My projects:
${userConfig.projects.map((project) => `- ${project.title}: ${project.description}`).join("\n")}

My achievements and competitions:
${userConfig.competitions.map((comp) => `- ${comp.title} (${comp.year}): ${comp.achievement}`).join("\n")}

Response rules:
1. ALWAYS use first-person (I, me, my)
2. Never say "${userConfig.name}" or refer to myself in third-person
3. Keep responses concise and professional
4. Use markdown formatting when appropriate
5. Maintain a friendly, conversational tone

If a question is unrelated to my work or portfolio, say: "That's outside my area of expertise. Feel free to email me at ${userConfig.contact.email} and we can discuss further!"`;
  useEffect(() => {
    setChatHistory((prev) => ({
      ...prev,
      messages: [
        ...prev.messages,
        { role: "assistant", content: welcomeMessage }
      ]
    }));
  }, []);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory.messages]);
  const handleInputChange = (e) => {
    setChatHistory((prev) => ({ ...prev, input: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userInput = chatHistory.input.trim();
    if (!userInput) return;
    setChatHistory((prev) => ({
      messages: [...prev.messages, { role: "user", content: userInput }],
      input: ""
    }));
    setIsTyping(true);
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          messages: [
            { role: "system", content: systemPrompt },
            ...chatHistory.messages,
            { role: "user", content: userInput }
          ]
        })
      });
      if (!response.ok) throw new Error("Failed to get response");
      const data = await response.json();
      setChatHistory((prev) => ({
        ...prev,
        messages: [
          ...prev.messages,
          { role: "assistant", content: data.message }
        ]
      }));
    } catch (error) {
      setChatHistory((prev) => ({
        ...prev,
        messages: [
          ...prev.messages,
          {
            role: "assistant",
            content: `I'm having trouble processing that. Please email me at ${userConfig.contact.email}`
          }
        ]
      }));
    } finally {
      setIsTyping(false);
    }
  };
  if (!isOpen) return null;
  return /* @__PURE__ */ jsx(
    DraggableWindow,
    {
      title: `${userConfig.website} ⸺ zsh`,
      onClose,
      initialPosition: {
        x: Math.floor(window.innerWidth * 0.1),
        y: Math.floor(window.innerHeight * 0.1)
      },
      initialSize: { width: 700, height: 500 },
      className: "bg-black/80 backdrop-blur-sm",
      children: /* @__PURE__ */ jsxs("div", { className: "p-4 text-gray-200 font-mono text-sm h-full flex flex-col overflow-hidden", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex-1 overflow-y-auto bg-black/50 rounded-lg p-4", children: [
          chatHistory.messages.map((msg, index) => /* @__PURE__ */ jsx("div", { className: "mb-2", children: msg.role === "user" ? /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-green-400 font-bold", children: ">" }),
            /* @__PURE__ */ jsx("pre", { className: "whitespace-pre-wrap", children: msg.content })
          ] }) : /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-2", children: [
            /* @__PURE__ */ jsxs("span", { className: "text-green-400 font-bold", children: [
              "$",
              userConfig.website,
              ":"
            ] }),
            /* @__PURE__ */ jsx("pre", { className: "whitespace-pre-wrap", children: msg.content })
          ] }) }, index)),
          isTyping && /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-1", children: [
            /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-green-400 rounded-full animate-bounce", style: { animationDelay: "0ms" } }),
            /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-green-400 rounded-full animate-bounce", style: { animationDelay: "150ms" } }),
            /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-green-400 rounded-full animate-bounce", style: { animationDelay: "300ms" } })
          ] }),
          /* @__PURE__ */ jsx("div", { ref: messagesEndRef })
        ] }),
        /* @__PURE__ */ jsx("form", { onSubmit: handleSubmit, className: "mt-2 bg-black/50 rounded-lg p-2", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2", children: [
          /* @__PURE__ */ jsxs("span", { className: "whitespace-nowrap text-green-400 font-bold", children: [
            userConfig.website,
            " root %"
          ] }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              value: chatHistory.input,
              onChange: handleInputChange,
              className: "w-full sm:flex-1 bg-transparent outline-none text-white placeholder-gray-400",
              placeholder
            }
          )
        ] }) })
      ] })
    }
  );
}

function MobileDock({ onGitHubClick, onNotesClick, onResumeClick, onTerminalClick }) {
  const handleEmailClick = () => {
    window.location.href = `mailto:${userConfig.contact.email}`;
  };
  const handleSpotifyClick = () => {
    window.open(`https://open.spotify.com/playlist/${userConfig.spotify.playlistId}`, "_blank");
  };
  return /* @__PURE__ */ jsxs("div", { className: "fixed bottom-0 left-0 right-0 md:hidden flex flex-col items-center z-50 space-y-2", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-4 mb-4 p-3 rounded-3xl space-x-4 flex justify-around items-center max-w-[400px] mx-auto", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: onGitHubClick,
          className: "flex flex-col items-center cursor-pointer",
          children: /* @__PURE__ */ jsx("div", { className: "w-18 h-18 bg-black rounded-2xl flex items-center justify-center", children: /* @__PURE__ */ jsx(BsGithub, { size: 55, className: "text-white" }) })
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: onNotesClick,
          className: "flex flex-col items-center cursor-pointer",
          children: /* @__PURE__ */ jsx("div", { className: "w-18 h-18 bg-gradient-to-t from-yellow-600 to-yellow-400 rounded-2xl flex items-center justify-center", children: /* @__PURE__ */ jsx(BsStickyFill, { size: 55, className: "text-white" }) })
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: onResumeClick,
          className: "flex flex-col items-center cursor-pointer",
          children: /* @__PURE__ */ jsx("div", { className: "w-18 h-18 bg-gradient-to-t from-red-600 to-red-400 rounded-2xl flex items-center justify-center", children: /* @__PURE__ */ jsx(BsFilePdf, { size: 55, className: "text-white" }) })
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: onTerminalClick,
          className: "flex flex-col items-center cursor-pointer",
          children: /* @__PURE__ */ jsx("div", { className: "w-18 h-18 bg-black rounded-2xl flex items-center justify-center", children: /* @__PURE__ */ jsx(RiTerminalFill, { size: 55, className: "text-white" }) })
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mx-4 mb-4 p-3 bg-gradient-to-t from-gray-700 to-gray-800 backdrop-blur-xl rounded-3xl space-x-4 flex justify-around items-center max-w-[400px] mx-auto", children: [
      /* @__PURE__ */ jsx("a", { href: `tel:${userConfig.contact.phone}`, className: "flex flex-col items-center", children: /* @__PURE__ */ jsx("div", { className: "w-18 h-18 bg-gradient-to-t from-green-600 to-green-400 rounded-2xl flex items-center justify-center", children: /* @__PURE__ */ jsx(IoIosCall, { size: 55, className: "text-white" }) }) }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: handleEmailClick,
          className: "flex flex-col items-center cursor-pointer",
          children: /* @__PURE__ */ jsx("div", { className: "w-18 h-18 bg-gradient-to-t from-blue-600 to-blue-400 rounded-2xl flex items-center justify-center", children: /* @__PURE__ */ jsx(IoIosMail, { size: 55, className: "text-white" }) })
        }
      ),
      /* @__PURE__ */ jsx("a", { href: userConfig.social.linkedin, className: "flex flex-col items-center", children: /* @__PURE__ */ jsx("div", { className: "w-18 h-18 bg-[#0a66c2] rounded-2xl flex items-center justify-center", children: /* @__PURE__ */ jsx(BsLinkedin, { size: 50, className: "text-white" }) }) }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: handleSpotifyClick,
          className: "flex flex-col items-center cursor-pointer",
          children: /* @__PURE__ */ jsx("div", { className: "w-18 h-18 bg-gradient-to-t from-black to-black/55 rounded-2xl flex items-center justify-center", children: /* @__PURE__ */ jsx(BsSpotify, { size: 55, className: "text-[#1ED760]" }) })
        }
      )
    ] })
  ] });
}

function ResumeViewer({ isOpen, onClose }) {
  useRef(null);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  if (!isOpen) return null;
  return /* @__PURE__ */ jsx(
    DraggableWindow,
    {
      title: "Resume.pdf",
      onClose,
      initialPosition: {
        x: Math.floor(window.innerWidth * 0.4),
        y: Math.floor(window.innerHeight * 0.2)
      },
      className: "w-[90%] h-[90%] max-w-5xl",
      initialSize: { width: 800, height: 600 },
      children: /* @__PURE__ */ jsx("div", { className: "h-full bg-white", children: /* @__PURE__ */ jsx("figure", { className: "h-full", children: /* @__PURE__ */ jsx("object", { data: userConfig.resume.localPath, type: "application/pdf", width: "100%", className: "h-full" }) }) })
    }
  );
}

function SpotifyPlayer({ isOpen, onClose, playlistId }) {
  const [isMinimized, setIsMinimized] = useState(false);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  if (!isOpen) return null;
  return /* @__PURE__ */ jsx(
    DraggableWindow,
    {
      title: "Spotify Player",
      onClose,
      initialPosition: {
        x: Math.floor(window.innerWidth * 0.1),
        y: Math.floor(window.innerHeight * 0.2)
      },
      className: `w-[90%] max-w-md transition-all duration-300 ${isMinimized ? "h-16" : "h-[300px]"}`,
      initialSize: { width: 800, height: 600 },
      children: /* @__PURE__ */ jsx("div", { className: `h-full transition-all duration-300 ${isMinimized ? "hidden" : "block"}`, children: /* @__PURE__ */ jsx(
        "iframe",
        {
          src: `https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0`,
          width: "100%",
          height: "100%",
          allow: "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",
          loading: "lazy",
          className: "border-0"
        }
      ) })
    }
  );
}

const DesktopDock = ({ onTerminalClick, onNotesClick, onGitHubClick, activeApps }) => {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [showResume, setShowResume] = useState(false);
  const [showSpotify, setShowSpotify] = useState(false);
  const [showLinksPopup, setShowLinksPopup] = useState(false);
  const linksPopupRef = useRef(null);
  const handleLinksClick = () => {
    setShowLinksPopup(!showLinksPopup);
  };
  const handleCalendarClick = () => {
    window.open(userConfig.contact.calendly, "_blank");
  };
  const handleSpotifyClick = () => {
    setShowSpotify(true);
  };
  const handleResumeClick = () => {
    setShowResume(true);
  };
  const handleCloseResume = () => {
    setShowResume(false);
  };
  const handleCloseSpotify = () => {
    setShowSpotify(false);
  };
  useEffect(() => {
    function handleClickOutside(event) {
      if (linksPopupRef.current && !linksPopupRef.current.contains(event.target)) {
        setShowLinksPopup(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const Tooltip = ({ text }) => /* @__PURE__ */ jsx("div", { className: "absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-2 py-1 rounded text-sm whitespace-nowrap", children: text });
  const LinksPopup = () => /* @__PURE__ */ jsx(
    "div",
    {
      ref: linksPopupRef,
      className: "absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-gray-800/90 w-30 backdrop-blur-sm rounded-lg p-4 shadow-xl",
      children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-y-2", children: [
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: userConfig.social.linkedin,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "flex items-center gap-2 text-gray-300 hover:text-white",
            children: [
              /* @__PURE__ */ jsx(BsLinkedin, { size: 20 }),
              /* @__PURE__ */ jsx("span", { children: "LinkedIn" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: userConfig.social.github,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "flex items-center gap-2 text-gray-300 hover:text-white",
            children: [
              /* @__PURE__ */ jsx(BsGithub, { size: 20 }),
              /* @__PURE__ */ jsx("span", { children: "GitHub" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: `mailto:${userConfig.contact.email}`,
            className: "flex items-center gap-2 text-gray-300 hover:text-white",
            children: [
              /* @__PURE__ */ jsx(IoIosMail, { size: 20 }),
              /* @__PURE__ */ jsx("span", { children: "Email" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: `tel:${userConfig.contact.phone}`,
            className: "flex items-center gap-2 text-gray-300 hover:text-white",
            children: [
              /* @__PURE__ */ jsx(IoIosCall, { size: 20 }),
              /* @__PURE__ */ jsx("span", { children: "Call" })
            ]
          }
        )
      ] })
    }
  );
  return /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsx("div", { className: "fixed bottom-0 left-0 right-0 hidden md:flex justify-center pb-4 z-0", children: /* @__PURE__ */ jsx("div", { className: "bg-gray-600/50 backdrop-blur-sm rounded-2xl p-2 shadow-xl", children: /* @__PURE__ */ jsxs("div", { className: "flex space-x-2", children: [
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: onGitHubClick,
          onMouseEnter: () => setHoveredIcon("github"),
          onMouseLeave: () => setHoveredIcon(null),
          className: "relative group",
          children: [
            /* @__PURE__ */ jsx("div", { className: `w-12 h-12 bg-gradient-to-t from-black to-black/60 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 ease-out hover:scale-110 active:scale-95 ${activeApps.github ? "ring-2 ring-white/50" : ""}`, children: /* @__PURE__ */ jsx(BsGithub, { size: 35, className: "text-gray-100" }) }),
            hoveredIcon === "github" && /* @__PURE__ */ jsx(Tooltip, { text: "My Projects" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: onNotesClick,
          onMouseEnter: () => setHoveredIcon("notes"),
          onMouseLeave: () => setHoveredIcon(null),
          className: "relative group",
          children: [
            /* @__PURE__ */ jsx("div", { className: `w-12 h-12 bg-gradient-to-t from-yellow-600 to-yellow-400 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 ease-out hover:scale-110 active:scale-95 ${activeApps.notes ? "ring-2 ring-white/50" : ""}`, children: /* @__PURE__ */ jsx(BsStickyFill, { size: 35, className: "text-white" }) }),
            hoveredIcon === "notes" && /* @__PURE__ */ jsx(Tooltip, { text: "Resume Notes" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: handleResumeClick,
          onMouseEnter: () => setHoveredIcon("resume"),
          onMouseLeave: () => setHoveredIcon(null),
          className: "relative group",
          children: [
            /* @__PURE__ */ jsx("div", { className: `w-12 h-12 bg-gradient-to-t from-red-600 to-red-400 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 ease-out hover:scale-110 active:scale-95 ${activeApps.resume ? "ring-2 ring-white/50" : ""}`, children: /* @__PURE__ */ jsx(BsFilePdf, { size: 35, className: "text-white" }) }),
            hoveredIcon === "resume" && /* @__PURE__ */ jsx(Tooltip, { text: "View Resume" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: handleCalendarClick,
          onMouseEnter: () => setHoveredIcon("calendar"),
          onMouseLeave: () => setHoveredIcon(null),
          className: "relative",
          children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-gradient-to-t from-blue-600 to-blue-400 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 ease-out hover:scale-110 active:scale-95", children: /* @__PURE__ */ jsx(BsCalendar, { size: 35, className: "text-white" }) }),
            hoveredIcon === "calendar" && /* @__PURE__ */ jsx(Tooltip, { text: "Schedule a Call" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: handleSpotifyClick,
          onMouseEnter: () => setHoveredIcon("spotify"),
          onMouseLeave: () => setHoveredIcon(null),
          className: "relative",
          children: [
            /* @__PURE__ */ jsx("div", { className: `w-12 h-12 bg-gradient-to-t from-green-600 to-green-400 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 ease-out hover:scale-110 active:scale-95 ${activeApps.spotify ? "ring-2 ring-white/50" : ""}`, children: /* @__PURE__ */ jsx(BsSpotify, { size: 35, className: "text-white" }) }),
            hoveredIcon === "spotify" && /* @__PURE__ */ jsx(Tooltip, { text: "Spotify Playlist" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: handleLinksClick,
          onMouseEnter: () => setHoveredIcon("links"),
          onMouseLeave: () => setHoveredIcon(null),
          className: "relative",
          children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-gradient-to-t from-purple-600 to-purple-400 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 ease-out hover:scale-110 active:scale-95", children: /* @__PURE__ */ jsx(FaLink, { size: 35, className: "text-white" }) }),
            hoveredIcon === "links" && /* @__PURE__ */ jsx(Tooltip, { text: "Contact Links" }),
            showLinksPopup && /* @__PURE__ */ jsx(LinksPopup, {})
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: onTerminalClick,
          onMouseEnter: () => setHoveredIcon("terminal"),
          onMouseLeave: () => setHoveredIcon(null),
          className: "relative",
          children: [
            /* @__PURE__ */ jsx("div", { className: `w-12 h-12 bg-gradient-to-t from-black to-black/60 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 ease-out hover:scale-110 active:scale-95 ${activeApps.terminal ? "ring-2 ring-white/50" : ""}`, children: /* @__PURE__ */ jsx(RiTerminalFill, { size: 35, className: "text-white" }) }),
            hoveredIcon === "terminal" && /* @__PURE__ */ jsx(Tooltip, { text: "Terminal" })
          ]
        }
      )
    ] }) }) }),
    /* @__PURE__ */ jsx(ResumeViewer, { isOpen: showResume, onClose: handleCloseResume }),
    /* @__PURE__ */ jsx(
      SpotifyPlayer,
      {
        isOpen: showSpotify,
        onClose: handleCloseSpotify,
        playlistId: userConfig.spotify.playlistId
      }
    )
  ] });
};

const NotesApp = ({ isOpen, onClose }) => {
  const [activeSection, setActiveSection] = useState("menu");
  const [activeImageIndices, setActiveImageIndices] = useState({});
  const handleSectionClick = (section) => {
    setActiveSection(section);
  };
  const handleBackClick = () => {
    setActiveSection("menu");
  };
  const handleNextImage = (itemId, images) => {
    setActiveImageIndices((prevIndices) => ({
      ...prevIndices,
      [itemId]: ((prevIndices[itemId] ?? -1) + 1) % images.length
    }));
  };
  const handlePrevImage = (itemId, images) => {
    setActiveImageIndices((prevIndices) => ({
      ...prevIndices,
      [itemId]: ((prevIndices[itemId] ?? 0) - 1 + images.length) % images.length
    }));
  };
  if (!isOpen) return null;
  const education = userConfig.education || [];
  const experience = userConfig.experience || [];
  const courses = userConfig.courses || [];
  const skills = userConfig.skills || [];
  const roles = userConfig.extraCurricularRoles || [];
  const activities = userConfig.extraCurricularActivities || [];
  const competitions = userConfig.competitions || [];
  const renderBackButton = () => /* @__PURE__ */ jsxs(
    "button",
    {
      onClick: handleBackClick,
      className: "flex items-center gap-2 text-gray-300 hover:text-gray-100 mb-4",
      children: [
        /* @__PURE__ */ jsx(FaChevronLeft, {}),
        /* @__PURE__ */ jsx("span", { children: "Back to Menu" })
      ]
    }
  );
  const renderImageCarousel = (itemId, images) => {
    const currentIndex = activeImageIndices[itemId] ?? 0;
    if (!images || images.length === 0 || currentIndex >= images.length) {
      return null;
    }
    return /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
      /* @__PURE__ */ jsx("div", { className: "rounded-lg overflow-hidden mb-2", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: images[currentIndex].url,
          alt: images[currentIndex].alt,
          className: "w-full h-48 object-contain bg-gray-900 rounded-lg"
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-400 mb-3", children: images[currentIndex].description }),
      images.length > 1 && /* @__PURE__ */ jsxs("div", { className: "flex justify-between mt-2", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => handlePrevImage(itemId, images),
            className: "bg-gray-700 hover:bg-gray-600 text-white rounded-full w-8 h-8 flex items-center justify-center",
            children: "←"
          }
        ),
        /* @__PURE__ */ jsxs("span", { className: "text-gray-400", children: [
          currentIndex + 1,
          " / ",
          images.length
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => handleNextImage(itemId, images),
            className: "bg-gray-700 hover:bg-gray-600 text-white rounded-full w-8 h-8 flex items-center justify-center",
            children: "→"
          }
        )
      ] })
    ] });
  };
  const renderEducation = () => /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
    renderBackButton(),
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-gray-200 mb-6", children: "Education" }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: education.map((item, index) => {
      const itemId = `education-${index}`;
      return /* @__PURE__ */ jsxs("div", { className: "bg-gray-800/50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow", children: [
        /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold text-gray-200 mb-2", children: [
          item.degree,
          " ",
          item.major && `- ${item.major}`
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-gray-300 mb-2", children: [
          item.institution,
          ", ",
          item.location
        ] }),
        /* @__PURE__ */ jsx("div", { className: "text-gray-400 mb-3", children: item.year }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-300 mb-4", children: item.description }),
        item.images && item.images.length > 0 && renderImageCarousel(itemId, item.images)
      ] }, itemId);
    }) })
  ] });
  const renderExperience = () => /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
    renderBackButton(),
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-gray-200 mb-6", children: "Professional Experience" }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: experience.map((item, index) => {
      const itemId = `experience-${index}`;
      return /* @__PURE__ */ jsxs("div", { className: "bg-gray-800/50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-200 mb-2", children: item.title }),
        /* @__PURE__ */ jsxs("div", { className: "text-gray-300 mb-2", children: [
          item.company,
          ", ",
          item.location
        ] }),
        /* @__PURE__ */ jsx("div", { className: "text-gray-400 mb-3", children: item.period }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-300 mb-4", children: item.description }),
        item.technologies && /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 mb-4", children: item.technologies.map((tech, i) => /* @__PURE__ */ jsx("span", { className: "px-2 py-1 bg-gray-700 rounded text-xs text-gray-300", children: tech }, i)) }),
        item.images && item.images.length > 0 && renderImageCarousel(itemId, item.images)
      ] }, itemId);
    }) })
  ] });
  const renderCourses = () => /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
    renderBackButton(),
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-gray-200 mb-6", children: "Courses" }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: courses.map((item, index) => {
      const itemId = `courses-${index}`;
      return /* @__PURE__ */ jsxs("div", { className: "bg-gray-800/50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-200 mb-2", children: item.title }),
        /* @__PURE__ */ jsxs("div", { className: "text-gray-300 mb-2", children: [
          item.institution,
          ", ",
          item.location
        ] }),
        /* @__PURE__ */ jsx("div", { className: "text-gray-400 mb-3", children: item.year }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-300 mb-4", children: item.description }),
        item.images && item.images.length > 0 && renderImageCarousel(itemId, item.images)
      ] }, itemId);
    }) })
  ] });
  const renderSkills = () => /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
    renderBackButton(),
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-gray-200 mb-6", children: "Skills" }),
    /* @__PURE__ */ jsx("div", { className: "bg-gray-800/50 p-6 rounded-xl shadow-lg", children: /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: skills.map((skill, index) => /* @__PURE__ */ jsx("span", { className: "px-3 py-1 bg-gray-700 rounded text-sm text-gray-300", children: skill }, index)) }) })
  ] });
  const renderExtraCurricularRoles = () => /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
    renderBackButton(),
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-gray-200 mb-6", children: "Extracurricular Roles" }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: roles.map((item, index) => {
      const itemId = `roles-${index}`;
      return /* @__PURE__ */ jsxs("div", { className: "bg-gray-800/50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-200 mb-2", children: item.role }),
        /* @__PURE__ */ jsxs("div", { className: "text-gray-300 mb-2", children: [
          item.institution,
          ", ",
          item.location
        ] }),
        /* @__PURE__ */ jsx("div", { className: "text-gray-400 mb-3", children: item.year }),
        item.images && item.images.length > 0 && renderImageCarousel(itemId, item.images)
      ] }, itemId);
    }) })
  ] });
  const renderExtraCurricularActivities = () => /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
    renderBackButton(),
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-gray-200 mb-6", children: "Extracurricular Activities" }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: activities.map((item, index) => {
      const itemId = `activities-${index}`;
      return /* @__PURE__ */ jsxs("div", { className: "bg-gray-800/50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-200 mb-2", children: item.title }),
        /* @__PURE__ */ jsxs("div", { className: "text-gray-300 mb-2", children: [
          item.institution,
          ", ",
          item.location
        ] }),
        /* @__PURE__ */ jsx("div", { className: "text-gray-400 mb-3", children: item.year }),
        item.images && item.images.length > 0 && renderImageCarousel(itemId, item.images)
      ] }, itemId);
    }) })
  ] });
  const renderCompetitions = () => /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
    renderBackButton(),
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-gray-200 mb-6", children: "Competitions" }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: competitions.map((item, index) => {
      const itemId = `competitions-${index}`;
      return /* @__PURE__ */ jsxs("div", { className: "bg-gray-800/50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-200 mb-2", children: item.title }),
        /* @__PURE__ */ jsx("div", { className: "text-gray-300 mb-2", children: item.description }),
        /* @__PURE__ */ jsxs("div", { className: "text-gray-400 mb-3", children: [
          "Achievement: ",
          item.achievement,
          " (",
          item.year,
          ")"
        ] }),
        item.images && item.images.length > 0 && renderImageCarousel(itemId, item.images)
      ] }, itemId);
    }) })
  ] });
  const renderMenu = () => /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-gray-200 mb-6", children: "My Notes" }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: "bg-gray-800/50 p-4 rounded-lg cursor-pointer hover:bg-gray-700/50 transition-colors",
          onClick: () => handleSectionClick("competitions"),
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
              /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center", children: /* @__PURE__ */ jsx(FaTrophy, { size: 28, className: "text-white" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-200", children: "Competitions" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-400", children: "View my competition history and achievements" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: "bg-gray-800/50 p-4 rounded-lg cursor-pointer hover:bg-gray-700/50 transition-colors",
          onClick: () => handleSectionClick("education"),
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
              /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center", children: /* @__PURE__ */ jsx(FaGraduationCap, { size: 28, className: "text-white" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-200", children: "Education" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-400", children: "View my educational background and qualifications" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: "bg-gray-800/50 p-4 rounded-lg cursor-pointer hover:bg-gray-700/50 transition-colors",
          onClick: () => handleSectionClick("experience"),
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
              /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center", children: /* @__PURE__ */ jsx(FaBriefcase, { size: 28, className: "text-white" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-200", children: "Professional Experience" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-400", children: "Explore my professional work experience" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: "bg-gray-800/50 p-4 rounded-lg cursor-pointer hover:bg-gray-700/50 transition-colors",
          onClick: () => handleSectionClick("roles"),
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
              /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center", children: /* @__PURE__ */ jsx(FaUsers, { size: 28, className: "text-white" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-200", children: "Extracurricular Roles" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-400", children: "My involvement in student activities and roles" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: "bg-gray-800/50 p-4 rounded-lg cursor-pointer hover:bg-gray-700/50 transition-colors",
          onClick: () => handleSectionClick("activities"),
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
              /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-pink-600 rounded-xl flex items-center justify-center", children: /* @__PURE__ */ jsx(FaPalette, { size: 28, className: "text-white" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-200", children: "Extracurricular Activities" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-400", children: "My participation in events and activities" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: "bg-gray-800/50 p-4 rounded-lg cursor-pointer hover:bg-gray-700/50 transition-colors",
          onClick: () => handleSectionClick("courses"),
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
              /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center", children: /* @__PURE__ */ jsx(FaBookOpen, { size: 28, className: "text-white" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-200", children: "Courses" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-400", children: "Check out courses I have completed" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: "bg-gray-800/50 p-4 rounded-lg cursor-pointer hover:bg-gray-700/50 transition-colors",
          onClick: () => handleSectionClick("skills"),
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
              /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center", children: /* @__PURE__ */ jsx(FaCode, { size: 28, className: "text-white" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-200", children: "Skills" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-400", children: "See my technical skills and expertise" })
          ]
        }
      )
    ] })
  ] });
  const getWindowTitle = () => {
    switch (activeSection) {
      case "menu":
        return "Notes";
      case "education":
        return "Education Notes";
      case "experience":
        return "Experience Notes";
      case "courses":
        return "Courses Notes";
      case "skills":
        return "Skills Notes";
      case "roles":
        return "Extracurricular Roles Notes";
      case "activities":
        return "Extracurricular Activities Notes";
      case "competitions":
        return "Competitions Notes";
      default:
        return "Notes";
    }
  };
  return /* @__PURE__ */ jsx(
    DraggableWindow,
    {
      title: getWindowTitle(),
      onClose,
      initialPosition: {
        x: Math.floor(window.innerWidth * 0.3),
        y: Math.floor(window.innerHeight * 0.2)
      },
      className: "w-[93vw] md:max-w-4xl max-h-[90vh]",
      initialSize: { width: 700, height: 600 },
      children: /* @__PURE__ */ jsxs("div", { className: "overflow-y-auto p-4 md:p-6", style: { maxHeight: "calc(90vh - 1.5rem)" }, children: [
        activeSection === "menu" && renderMenu(),
        activeSection === "education" && renderEducation(),
        activeSection === "experience" && renderExperience(),
        activeSection === "courses" && renderCourses(),
        activeSection === "skills" && renderSkills(),
        activeSection === "roles" && renderExtraCurricularRoles(),
        activeSection === "activities" && renderExtraCurricularActivities(),
        activeSection === "competitions" && renderCompetitions()
      ] })
    }
  );
};

const GitHubViewer = ({ isOpen, onClose }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [expandedNodes, setExpandedNodes] = useState(/* @__PURE__ */ new Set());
  const [showStructure, setShowStructure] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const toggleNode = (path) => {
    const newExpandedNodes = new Set(expandedNodes);
    if (newExpandedNodes.has(path)) {
      newExpandedNodes.delete(path);
    } else {
      newExpandedNodes.add(path);
    }
    setExpandedNodes(newExpandedNodes);
  };
  const renderFileTree = (node, path = "") => {
    const currentPath = path ? `${path}/${node.name}` : node.name;
    const isExpanded = expandedNodes.has(currentPath);
    return /* @__PURE__ */ jsxs("div", { className: "ml-4", children: [
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: "flex items-center cursor-pointer hover:bg-gray-700/50 p-1 rounded",
          onClick: () => node.type === "directory" && toggleNode(currentPath),
          children: [
            node.type === "directory" ? /* @__PURE__ */ jsx(FaFolder, { className: "text-yellow-500 mr-2" }) : /* @__PURE__ */ jsx(FaFile, { className: "text-blue-400 mr-2" }),
            /* @__PURE__ */ jsx("span", { className: "text-gray-200", children: node.name })
          ]
        }
      ),
      node.type === "directory" && isExpanded && node.children && /* @__PURE__ */ jsx("div", { className: "ml-4", children: node.children.map((child) => renderFileTree(child, currentPath)) })
    ] }, currentPath);
  };
  const renderProjectStructure = (projectStructure) => {
    return /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center p-1 rounded", children: [
        /* @__PURE__ */ jsx(FaFolder, { className: "text-yellow-500 mr-2" }),
        /* @__PURE__ */ jsx("span", { className: "text-gray-200 font-bold", children: projectStructure.root })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "ml-4", children: projectStructure.children.map((child) => renderFileTree(child, projectStructure.root)) })
    ] });
  };
  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowStructure(true);
    setActiveImageIndex(0);
  };
  const handleBackClick = () => {
    setShowStructure(false);
    setSelectedProject(null);
  };
  const handleNextImage = () => {
    if (selectedProject) {
      setActiveImageIndex(
        (prevIndex) => prevIndex + 1 >= selectedProject.images.length ? 0 : prevIndex + 1
      );
    }
  };
  const handlePrevImage = () => {
    if (selectedProject) {
      setActiveImageIndex(
        (prevIndex) => prevIndex - 1 < 0 ? selectedProject.images.length - 1 : prevIndex - 1
      );
    }
  };
  if (!isOpen) return null;
  return /* @__PURE__ */ jsx(
    DraggableWindow,
    {
      title: showStructure ? selectedProject?.title || "GitHub Projects" : "GitHub Projects",
      onClose,
      initialPosition: {
        x: Math.floor(window.innerWidth * 0.2),
        y: Math.floor(window.innerHeight * 0.2)
      },
      className: "w-[93vw] md:max-w-4xl max-h-[90vh]",
      initialSize: { width: 800, height: 600 },
      children: /* @__PURE__ */ jsx("div", { className: "overflow-y-auto p-4 md:p-6", style: { maxHeight: "calc(90vh - 1.5rem)" }, children: !showStructure ? /* @__PURE__ */ jsxs(Fragment$1, { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4 text-gray-200", children: "My Projects" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: userConfig.projects.map((project) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "bg-gray-800/50 p-4 rounded-lg cursor-pointer transition-colors hover:bg-gray-700/50",
            onClick: () => handleProjectClick(project),
            children: [
              project.images && project.images.length > 0 && /* @__PURE__ */ jsx("div", { className: "w-full h-48 mb-3 overflow-hidden rounded-lg", children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: project.images[0].url,
                  alt: project.images[0].alt,
                  className: "w-full h-full object-cover"
                }
              ) }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-2 text-gray-200", children: project.title }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-400 mb-2", children: project.description }),
              /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 mb-2", children: project.techStack.map((tech) => /* @__PURE__ */ jsx(
                "span",
                {
                  className: "px-2 py-1 bg-gray-700 rounded text-xs text-gray-300",
                  children: tech
                },
                tech
              )) }),
              /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
                /* @__PURE__ */ jsxs(
                  "a",
                  {
                    href: project.repoUrl,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "flex items-center gap-2 text-sm hover:text-blue-400 text-gray-300",
                    onClick: (e) => e.stopPropagation(),
                    children: [
                      /* @__PURE__ */ jsx(FaGithub, {}),
                      /* @__PURE__ */ jsx("span", { children: "Repository" })
                    ]
                  }
                ),
                project.liveUrl && /* @__PURE__ */ jsxs(
                  "a",
                  {
                    href: project.liveUrl,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "flex items-center gap-2 text-sm hover:text-blue-400 text-gray-300",
                    onClick: (e) => e.stopPropagation(),
                    children: [
                      /* @__PURE__ */ jsx(FaExternalLinkAlt, {}),
                      /* @__PURE__ */ jsx("span", { children: "Live Demo" })
                    ]
                  }
                )
              ] })
            ]
          },
          project.id
        )) })
      ] }) : /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: handleBackClick,
            className: "flex items-center gap-2 text-gray-300 hover:text-gray-100 mb-4",
            children: [
              /* @__PURE__ */ jsx(FaChevronLeft, {}),
              /* @__PURE__ */ jsx("span", { children: "Back to Projects" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-gray-800/50 rounded-lg p-4", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-4 text-gray-200", children: "Project Structure" }),
            /* @__PURE__ */ jsx("div", { className: "font-mono text-sm", children: selectedProject && renderProjectStructure(selectedProject.structure) })
          ] }),
          selectedProject && selectedProject.images && selectedProject.images.length > 0 && /* @__PURE__ */ jsxs("div", { className: "bg-gray-800/50 rounded-lg p-4", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-4 text-gray-200", children: "Screenshots" }),
            /* @__PURE__ */ jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsx("div", { className: "rounded-lg overflow-hidden mb-2", children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: selectedProject.images[activeImageIndex].url,
                  alt: selectedProject.images[activeImageIndex].alt,
                  className: "w-full object-cover"
                }
              ) }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-300 mb-3", children: selectedProject.images[activeImageIndex].description }),
              selectedProject.images.length > 1 && /* @__PURE__ */ jsxs("div", { className: "flex justify-between mt-2", children: [
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    onClick: handlePrevImage,
                    className: "bg-gray-700 hover:bg-gray-600 text-white rounded-full w-8 h-8 flex items-center justify-center",
                    children: "←"
                  }
                ),
                /* @__PURE__ */ jsxs("span", { className: "text-gray-400", children: [
                  activeImageIndex + 1,
                  " / ",
                  selectedProject.images.length
                ] }),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    onClick: handleNextImage,
                    className: "bg-gray-700 hover:bg-gray-600 text-white rounded-full w-8 h-8 flex items-center justify-center",
                    children: "→"
                  }
                )
              ] })
            ] }),
            selectedProject.repoUrl && /* @__PURE__ */ jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsxs(
              "a",
              {
                href: selectedProject.repoUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "flex items-center gap-2 text-sm hover:text-blue-400 text-gray-300 bg-gray-700/50 p-2 rounded-lg",
                children: [
                  /* @__PURE__ */ jsx(FaGithub, {}),
                  /* @__PURE__ */ jsx("span", { children: "Visit GitHub Repository" })
                ]
              }
            ) }),
            selectedProject.liveUrl && /* @__PURE__ */ jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsxs(
              "a",
              {
                href: selectedProject.liveUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "flex items-center gap-2 text-sm hover:text-blue-400 text-gray-300 bg-gray-700/50 p-2 rounded-lg",
                children: [
                  /* @__PURE__ */ jsx(FaLink, {}),
                  /* @__PURE__ */ jsx("span", { children: "Visit Live Site" })
                ]
              }
            ) })
          ] })
        ] })
      ] }) })
    }
  );
};

function Desktop({ initialBg, backgroundMap }) {
  const [currentBg, setCurrentBg] = useState(initialBg);
  const [showTerminal, setShowTerminal] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const [showGitHub, setShowGitHub] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const [showSpotify, setShowSpotify] = useState(false);
  const [currentTutorialStep, setCurrentTutorialStep] = useState(0);
  const [showTutorial, setShowTutorial] = useState(false);
  const [activeApps, setActiveApps] = useState({
    terminal: false,
    notes: false,
    github: false,
    resume: false,
    spotify: false
  });
  useEffect(() => {
    const lastBg = localStorage.getItem("lastBackground");
    const hasCompletedTutorial = localStorage.getItem("hasCompletedTutorial") === "true";
    if (lastBg === initialBg) {
      const bgKeys = Object.keys(backgroundMap);
      const availableBgs = bgKeys.filter((bg) => bg !== lastBg);
      const newBg = availableBgs[Math.floor(Math.random() * availableBgs.length)];
      setCurrentBg(newBg);
    }
    if (!hasCompletedTutorial) {
      setShowTutorial(true);
    }
    localStorage.setItem("lastBackground", currentBg);
  }, [initialBg, backgroundMap]);
  const resetTutorial = () => {
    setCurrentTutorialStep(0);
    setShowTutorial(true);
    localStorage.setItem("hasCompletedTutorial", "false");
  };
  const tutorialSteps = [
    {
      title: "Welcome to My Portfolio! 👋",
      content: "This is a macOS-inspired portfolio where you can explore my work and experience. Let me guide you through some of the features!",
      action: () => setShowNotes(true),
      buttonText: "Let's Begin"
    },
    {
      title: "Notes App",
      content: "This is my Notes app where you can find detailed information about my education, experience, and skills. Feel free to explore!",
      action: () => {
        setShowNotes(false);
        setShowGitHub(true);
      },
      buttonText: "Next: Projects"
    },
    {
      title: "GitHub Projects",
      content: "Here you can browse through my projects, see their structure, and check out the code. Each project has screenshots and links to the repository.",
      action: () => {
        setShowGitHub(false);
        setShowTerminal(true);
      },
      buttonText: "Next: Terminal"
    },
    {
      title: "Terminal",
      content: "The terminal is an interactive way to learn more about me. Try asking questions like 'What are your skills?' or 'Tell me about your experience'",
      action: () => {
        setShowTerminal(false);
      },
      buttonText: "Next: Explore"
    },
    {
      title: "Explore",
      content: "Now that you've seen the basics, feel free to explore the rest of the portfolio from the dock below. I've got some cool projects and information waiting for you!",
      action: () => {
        setShowTutorial(false);
      },
      buttonText: "Thanks! I Got it from here!"
    }
  ];
  const handleTutorialAction = () => {
    if (tutorialSteps[currentTutorialStep].action) {
      tutorialSteps[currentTutorialStep].action();
    }
    if (currentTutorialStep < tutorialSteps.length - 1) {
      setCurrentTutorialStep((prev) => prev + 1);
    } else {
      setShowTutorial(false);
      localStorage.setItem("hasCompletedTutorial", "true");
    }
  };
  const handleAppOpen = (app) => {
    setActiveApps((prev) => ({
      ...prev,
      [app]: true
    }));
  };
  const handleAppClose = (app) => {
    setActiveApps((prev) => ({
      ...prev,
      [app]: false
    }));
  };
  return /* @__PURE__ */ jsxs("div", { className: "relative w-screen h-screen overflow-hidden", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute inset-0 bg-cover bg-center",
        style: { backgroundImage: `url(${backgroundMap[currentBg]})` }
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "relative z-10", children: /* @__PURE__ */ jsx(
      MacToolbar,
      {
        onTerminalClick: () => setShowTerminal(true),
        onShowTutorial: resetTutorial
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "relative z-0 flex items-center justify-center h-[calc(100vh-10rem)] md:h-[calc(100vh-1.5rem)] pt-6" }),
    /* @__PURE__ */ jsx(
      MobileDock,
      {
        onGitHubClick: () => {
          setShowGitHub(true);
          handleAppOpen("github");
        },
        onNotesClick: () => {
          setShowNotes(true);
          handleAppOpen("notes");
        },
        onResumeClick: () => {
          setShowResume(true);
          handleAppOpen("resume");
        },
        onTerminalClick: () => {
          setShowTerminal(true);
          handleAppOpen("terminal");
        }
      }
    ),
    /* @__PURE__ */ jsx(
      DesktopDock,
      {
        onTerminalClick: () => {
          setShowTerminal(true);
          handleAppOpen("terminal");
        },
        onNotesClick: () => {
          setShowNotes(true);
          handleAppOpen("notes");
        },
        onGitHubClick: () => {
          setShowGitHub(true);
          handleAppOpen("github");
        },
        activeApps
      }
    ),
    /* @__PURE__ */ jsx(NotesApp, { isOpen: showNotes, onClose: () => {
      setShowNotes(false);
      handleAppClose("notes");
    } }),
    /* @__PURE__ */ jsx(GitHubViewer, { isOpen: showGitHub, onClose: () => {
      setShowGitHub(false);
      handleAppClose("github");
    } }),
    /* @__PURE__ */ jsx(ResumeViewer, { isOpen: showResume, onClose: () => {
      setShowResume(false);
      handleAppClose("resume");
    } }),
    /* @__PURE__ */ jsx(MacTerminal, { isOpen: showTerminal, onClose: () => {
      setShowTerminal(false);
      handleAppClose("terminal");
    } }),
    showTutorial && /* @__PURE__ */ jsx("div", { className: "fixed right-4 top-1/2 transform -translate-y-1/2 z-50", children: /* @__PURE__ */ jsxs("div", { className: "bg-gray-800/90 backdrop-blur-sm text-white p-4 rounded-lg shadow-xl max-w-xs animate-fade-in", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-2", children: tutorialSteps[currentTutorialStep].title }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-300 mb-4", children: tutorialSteps[currentTutorialStep].content }),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
        /* @__PURE__ */ jsxs("span", { className: "text-xs text-gray-400", children: [
          currentTutorialStep + 1,
          " of ",
          tutorialSteps.length
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: handleTutorialAction,
            className: "text-sm text-blue-400 hover:text-blue-300",
            children: tutorialSteps[currentTutorialStep].buttonText
          }
        )
      ] })
    ] }) })
  ] });
}

const macBackground2 = new Proxy({"src":"/_astro/mac-background2.DAWzICtV.jpg","width":6016,"height":3384,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/002/source/repos/portfolio/src/assets/images/mac-background2.jpg";
							}
							
							return target[name];
						}
					});

const $$LandingPage = createComponent(async ($$result, $$props, $$slots) => {
  const backgrounds = [macBackground1, macBackground2, macBackground3];
  function getRandomBackground() {
    return `bg-${Math.floor(Math.random() * backgrounds.length) + 1}`;
  }
  const optimizedBackgrounds = await Promise.all(
    backgrounds.map(
      (bg) => getImage({
        src: bg,
        width: 3500
      })
    )
  );
  const backgroundMap = Object.fromEntries(
    optimizedBackgrounds.map((bg, index) => [`bg-${index + 1}`, bg.src])
  );
  return renderTemplate`${renderComponent($$result, "AppLayout", Desktop, { "client:load": true, "initialBg": getRandomBackground(), "backgroundMap": backgroundMap, "client:component-hydration": "load", "client:component-path": "C:/Users/002/source/repos/portfolio/src/layouts/AppLayout", "client:component-export": "default" })}`;
}, "C:/Users/002/source/repos/portfolio/src/components/LandingPage.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- 
  Customize these values for your portfolio:
  - title: Your name and role
  - description: Brief description of your expertise
  - canonical: Your website URL
  - openGraph: Social media sharing metadata
-->${renderComponent($$result, "Layout", $$Layout, { "title": userConfig.seo.title, "description": userConfig.seo.description, "canonical": userConfig.website, "openGraph": {
    url: userConfig.website,
    title: userConfig.seo.title,
    description: userConfig.seo.description,
    site_name: userConfig.name
  } }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "LandingPage", $$LandingPage, {})} ` })}`;
}, "C:/Users/002/source/repos/portfolio/src/pages/index.astro", void 0);

const $$file = "C:/Users/002/source/repos/portfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
