import {useEffect, useState} from 'react';
import {
    FaGraduationCap, FaBriefcase, FaChevronLeft, FaBookOpen,
    FaCode, FaStar,
    // FaUsers,
    // FaPalette,
    // FaTrophy
} from 'react-icons/fa';
import {userConfig} from '../../config';
import DraggableWindow from './DraggableWindow';
import {useI18n} from '../../store/i18n';

export type Section =
    | 'menu'
    | 'education'
    | 'experience'
    | 'courses'
    | 'skills'
    | 'starprojects'
// | 'roles'
// | 'activities'
// | 'competitions'
    ;

interface NotesAppProps {
    isOpen: boolean;
    onClose: () => void;
    section?: Section; // external control of an active section
}

// Type for storing image indices per item
type ImageIndicesState = Record<string, number>;

import type {Image} from '../../types';

const NotesApp = ({isOpen, onClose, section}: NotesAppProps) => {
    const t = useI18n();

    const [activeSection, setActiveSection] = useState<Section>('menu');
    // Store image indices in an object: { 'itemId': index }
    const [activeImageIndices, setActiveImageIndices] = useState<ImageIndicesState>({});

    const handleSectionClick = (section: Section) => {
        setActiveSection(section);
        // No need to reset image indices globally here, 
        // they are per-item now and will default to 0 if not set
    };

    const handleBackClick = () => {
        setActiveSection('menu');
    };

    // Update image index for a specific item
    const handleNextImage = (itemId: string, images: readonly Image[]) => {
        setActiveImageIndices(prevIndices => ({
            ...prevIndices,
            [itemId]: ((prevIndices[itemId] ?? -1) + 1) % images.length
        }));
    };

    // Update image index for a specific item
    const handlePrevImage = (itemId: string, images: readonly Image[]) => {
        setActiveImageIndices(prevIndices => ({
            ...prevIndices,
            [itemId]: ((prevIndices[itemId] ?? 0) - 1 + images.length) % images.length
        }));
    };

    // Sync external section prop to internal state
    useEffect(() => {
        if (section && section !== activeSection) {
            setActiveSection(section);
        }
    }, [section]);

    if (!isOpen) return null;

    const education = userConfig.education || [];
    const experience = userConfig.experience || [];
    const courses = userConfig.courses || [];
    const skills = userConfig.skills || [];
    const starProjects = userConfig.starProjects || [];
    // const roles = userConfig.extraCurricularRoles || [];
    // const activities = userConfig.extraCurricularActivities || [];
    // const competitions = userConfig.competitions || [];

    const renderBackButton = () => (
        <button
            onClick={handleBackClick}
            aria-label={t('notes.backToMenu')}
            className="flex items-center gap-2 text-gray-300 hover:text-gray-100 mb-4"
        >
            <FaChevronLeft/>
            <span>{t('notes.backToMenu')}</span>
        </button>
    );

    // Accepts itemId to manage state correctly
    const renderImageCarousel = (itemId: string, images: readonly Image[]) => {
        const currentIndex = activeImageIndices[itemId] ?? 0;
        if (!images || images.length === 0 || currentIndex >= images.length) {
            return null;
        }

        const currentImage = images[currentIndex];
        const imgSrc = typeof currentImage.url === 'string' ? currentImage.url : currentImage.url.src;
        const imgWidth = typeof currentImage.url === 'string' ? undefined : currentImage.url.width;
        const imgHeight = typeof currentImage.url === 'string' ? undefined : currentImage.url.height;

        return (
            <div className="mt-4">
                <div className="rounded-lg overflow-hidden mb-2">
                    <img
                        src={imgSrc}
                        width={imgWidth}
                        height={imgHeight}
                        alt={currentImage.alt || t('notes.screenshot')}
                        decoding="async"
                        loading="lazy"
                        className=" bg-white w-full h-48 object-contain  rounded-lg"
                    />
                </div>

                <div className="text-sm text-gray-400 mb-3" aria-live="polite">
                    {currentImage.description}
                </div>

                {images.length > 1 && (
                    <div className="flex justify-between mt-2">
                        <button
                            onClick={() => handlePrevImage(itemId, images)}
                            aria-label={t('notes.prevImage')}
                            className="bg-gray-700 hover:bg-gray-600 text-white rounded-full w-8 h-8 flex items-center justify-center"
                        >
                            ←
                        </button>
                        <span className="text-gray-400">
                            {currentIndex + 1} / {images.length}
                        </span>
                        <button
                            onClick={() => handleNextImage(itemId, images)}
                            aria-label={t('notes.nextImage')}
                            className="bg-gray-700 hover:bg-gray-600 text-white rounded-full w-8 h-8 flex items-center justify-center"
                        >
                            →
                        </button>
                    </div>
                )}
            </div>
        );
    };

    const renderEducation = () => (
        <div className="space-y-6">
            {renderBackButton()}
            <h2 className="text-2xl font-bold text-gray-200 mb-6">{t('notes.education.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {education.map((item, index) => {
                    const itemId = `education-${index}`;
                    return (
                        <div key={itemId} className="bg-gray-800/50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                            <h3 className="text-xl font-semibold text-gray-200 mb-2">{item.degree} {item.major && `- ${item.major}`}</h3>
                            <div className="text-gray-300 mb-2">{item.institution}, {item.location}</div>
                            <div className="text-gray-400 mb-3">{item.year}</div>
                            <p className="text-gray-300 mb-4">{item.description}</p>
                            {item.images && item.images.length > 0 && renderImageCarousel(itemId, item.images)}
                        </div>
                    );
                })}
            </div>
        </div>
    );

    const renderExperience = () => (
        <div className="space-y-6">
            {renderBackButton()}
            <h2 className="text-2xl font-bold text-gray-200 mb-6">{t('notes.experience.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {experience.map((item, index) => {
                    const itemId = `experience-${index}`;
                    return (
                        <div key={itemId} className="bg-gray-800/50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                            <h3 className="text-xl font-semibold text-gray-200 mb-2">{item.title}</h3>
                            <div className="text-gray-300 mb-2">{item.company}, {item.location}</div>
                            <div className="text-gray-400 mb-3">{item.period}</div>
                            <p className="text-gray-300 mb-4">{item.description}</p>
                            {item.technologies && (
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {item.technologies.map((tech, i) => (
                                        <span key={i} className="px-2 py-1 bg-gray-700 rounded text-xs text-gray-300">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            )}
                            {item.images && item.images.length > 0 && renderImageCarousel(itemId, item.images)}
                        </div>
                    );
                })}
            </div>
        </div>
    );

    const renderCourses = () => (
        <div className="space-y-6">
            {renderBackButton()}
            <h2 className="text-2xl font-bold text-gray-200 mb-6">{t('notes.courses.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {courses.map((item, index) => {
                    const itemId = `courses-${index}`;
                    return (
                        <div key={itemId} className="bg-gray-800/50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                            <h3 className="text-xl font-semibold text-gray-200 mb-2">{item.title}</h3>
                            <div className="text-gray-300 mb-2">{item.institution}, {item.location}</div>
                            <div className="text-gray-400 mb-3">{item.year}</div>
                            <p className="text-gray-300 mb-4">{item.description}</p>
                            {item.images && item.images.length > 0 && renderImageCarousel(itemId, item.images)}
                        </div>
                    );
                })}
            </div>
        </div>
    );

    const renderSkills = () => {
        return (
            <div className="space-y-6">
                {renderBackButton()}
                <h2 className="text-2xl font-bold text-gray-200 mb-6">{t('notes.skills.title')}</h2>

                <div className="space-y-8">
                    {skills.map((category: any, catIndex: number) => (
                        <div key={catIndex} className="bg-gray-800/50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                            <h3 className="text-xl font-semibold text-gray-200 mb-4 pb-2 border-b border-gray-700">
                                {category.title}
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {category.skills.map((skill: any, skillIndex: number) => {
                                    const IconComponent = skill.icon;
                                    return (
                                        <div key={skillIndex} className="p-4 bg-gray-700/30 rounded-lg flex items-start gap-4 hover:bg-gray-700/50 transition-colors">
                                            <div className="w-12 h-12 flex-shrink-0 bg-gray-800 rounded-lg flex items-center justify-center text-green-500">
                                                {IconComponent && <IconComponent size={24}/>}
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-medium text-gray-200 mb-1">{skill.name}</h4>
                                                <p className="text-sm text-gray-400 leading-relaxed">{skill.description}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    const renderStarProjects = () => (
        <div className="space-y-6">
            {renderBackButton()}
            <h2 className="text-2xl font-bold text-gray-200 mb-6">{t('notes.starProjects.title')}</h2>
            <div className="grid grid-cols-1 gap-8">
                {starProjects.map((item, index) => {
                    const itemId = `star-${index}`;
                    return (
                        <div key={itemId} className="bg-gray-800/50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-700/50">
                            <h3 className="text-2xl font-bold text-gray-100 mb-8 pb-2 border-b border-gray-700/50">{item.title}</h3>

                            <div className="space-y-8">
                                <div >
                                    <h4 className="text-sm font-semibold text-green-200 uppercase tracking-wider mb-2">{t('notes.star.context')}</h4>
                                    <p className="text-gray-300 italic">{item.context}</p>
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-green-300 uppercase tracking-wider mb-2">S - {t('notes.star.situation')}</h4>
                                    <p className="text-gray-300">{item.situation}</p>
                                </div>

                                <div>
                                    <h4 className="text-sm font-semibold text-green-400 uppercase tracking-wider mb-2">T - {t('notes.star.task')}</h4>
                                    <p className="text-gray-300">{item.task}</p>
                                </div>

                                <div>
                                    <h4 className="text-sm font-semibold text-green-500 uppercase tracking-wider mb-2">A - {t('notes.star.action')}</h4>
                                    <p className="text-gray-300">{item.action}</p>
                                </div>

                                <div>
                                    <h4 className="text-sm font-semibold text-green-600 uppercase tracking-wider mb-2">R - {t('notes.star.result')}</h4>
                                    <p className="text-gray-300 font-medium">{item.result}</p>
                                </div>
                            </div>

                            {item.technologies && (
                                <div className="flex my-4 flex-wrap gap-2">
                                    {item.technologies.map((tech, i) => (
                                        <span key={i} className="px-2 py-1 bg-gray-700 rounded text-xs text-gray-300">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            )}
                            {item.images && item.images.length > 0 && renderImageCarousel(itemId, item.images)}
                        </div>
                    );
                })}
            </div>
        </div>
    );

    // const renderExtraCurricularRoles = () => (
    //     <div className="space-y-6">
    //         {renderBackButton()}
    //         <h2 className="text-2xl font-bold text-gray-200 mb-6">Extracurricular Roles</h2>
    //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    //             {roles.map((item, index) => {
    //                 const itemId = `roles-${index}`;
    //                 return (
    //                     <div key={itemId} className="bg-gray-800/50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
    //                         <h3 className="text-xl font-semibold text-gray-200 mb-2">{item.role}</h3>
    //                         <div className="text-gray-300 mb-2">{item.institution}, {item.location}</div>
    //                         <div className="text-gray-400 mb-3">{item.year}</div>
    //                         {item.images && item.images.length > 0 && renderImageCarousel(itemId, item.images)}
    //                     </div>
    //                 );
    //             })}
    //         </div>
    //     </div>
    // );

    // const renderExtraCurricularActivities = () => (
    //     <div className="space-y-6">
    //         {renderBackButton()}
    //         <h2 className="text-2xl font-bold text-gray-200 mb-6">Extracurricular Activities</h2>
    //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    //             {activities.map((item, index) => {
    //                 const itemId = `activities-${index}`;
    //                 return (
    //                     <div key={itemId} className="bg-gray-800/50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
    //                         <h3 className="text-xl font-semibold text-gray-200 mb-2">{item.title}</h3>
    //                         <div className="text-gray-300 mb-2">{item.institution}, {item.location}</div>
    //                         <div className="text-gray-400 mb-3">{item.year}</div>
    //                         {item.images && item.images.length > 0 && renderImageCarousel(itemId, item.images)}
    //                     </div>
    //                 );
    //             })}
    //         </div>
    //     </div>
    // );

    // const renderCompetitions = () => (
    //     <div className="space-y-6">
    //         {renderBackButton()}
    //         <h2 className="text-2xl font-bold text-gray-200 mb-6">Competitions</h2>
    //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    //             {competitions.map((item, index) => {
    //                 const itemId = `competitions-${index}`;
    //                 return (
    //                     <div key={itemId} className="bg-gray-800/50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
    //                         <h3 className="text-xl font-semibold text-gray-200 mb-2">{item.title}</h3>
    //                         <div className="text-gray-300 mb-2">{item.description}</div>
    //                         <div className="text-gray-400 mb-3">Achievement: {item.achievement} ({item.year})</div>
    //                         {item.images && item.images.length > 0 && renderImageCarousel(itemId, item.images)}
    //                     </div>
    //                 );
    //             })}
    //         </div>
    //     </div>
    // );

    const renderMenu = () => (
        <div>
            <h2 className="text-2xl font-bold text-gray-200 mb-6">{t('notes.myNotes')}</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Competitions */}
                {/*<button*/}
                {/*    type="button"*/}
                {/*    className="bg-gray-800/50 p-4 rounded-lg hover:bg-gray-700/50 transition-colors text-left"*/}
                {/*    onClick={() => handleSectionClick('competitions')}*/}
                {/*    aria-label="Open Competitions section"*/}
                {/*>*/}
                {/*    <div className="flex items-center gap-3 mb-2">*/}
                {/*        <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center">*/}
                {/*            <FaTrophy size={28} className="text-white" />*/}
                {/*        </div>*/}
                {/*        <h3 className="text-xl font-semibold text-gray-200">Competitions</h3>*/}
                {/*    </div>*/}
                {/*    <p className="text-gray-400">View my competition history and achievements</p>*/}
                {/*</button>*/}

                {/* Education */}
                <button
                    type="button"
                    className="bg-gray-800/50 p-4 rounded-lg hover:bg-gray-700/50 transition-colors text-left"
                    onClick={() => handleSectionClick('education')}
                    aria-label={t('notes.education.desc')}
                >
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                            <FaGraduationCap size={28} className="text-white"/>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-200">{t('notes.education.title')}</h3>
                    </div>
                    <p className="text-gray-400">{t('notes.education.desc')}</p>
                </button>

                {/* Experience */}
                <button
                    type="button"
                    className="bg-gray-800/50 p-4 rounded-lg hover:bg-gray-700/50 transition-colors text-left"
                    onClick={() => handleSectionClick('experience')}
                    aria-label={t('notes.experience.desc')}
                >
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                            <FaBriefcase size={28} className="text-white"/>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-200">{t('notes.experience.title')}</h3>
                    </div>
                    <p className="text-gray-400">{t('notes.experience.desc')}</p>
                </button>
                {/* Extracurricular Roles */}
                {/*<button*/}
                {/*    type="button"*/}
                {/*    className="bg-gray-800/50 p-4 rounded-lg hover:bg-gray-700/50 transition-colors text-left"*/}
                {/*    onClick={() => handleSectionClick('roles')}*/}
                {/*    aria-label="Open Extracurricular Roles section"*/}
                {/*>*/}
                {/*    <div className="flex items-center gap-3 mb-2">*/}
                {/*        <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center">*/}
                {/*            <FaUsers size={28} className="text-white" />*/}
                {/*        </div>*/}
                {/*        <h3 className="text-xl font-semibold text-gray-200">Extracurricular Roles</h3>*/}
                {/*    </div>*/}
                {/*    <p className="text-gray-400">My involvement in student activities and roles</p>*/}
                {/*</button>*/}

                {/* Extracurricular Activities */}
                {/*<button*/}
                {/*    type="button"*/}
                {/*    className="bg-gray-800/50 p-4 rounded-lg hover:bg-gray-700/50 transition-colors text-left"*/}
                {/*    onClick={() => handleSectionClick('activities')}*/}
                {/*    aria-label="Open Extracurricular Activities section"*/}
                {/*>*/}
                {/*    <div className="flex items-center gap-3 mb-2">*/}
                {/*        <div className="w-12 h-12 bg-pink-600 rounded-xl flex items-center justify-center">*/}
                {/*            <FaPalette size={28} className="text-white" />*/}
                {/*        </div>*/}
                {/*        <h3 className="text-xl font-semibold text-gray-200">Extracurricular Activities</h3>*/}
                {/*    </div>*/}
                {/*    <p className="text-gray-400">My participation in events and activities</p>*/}
                {/*</button>*/}
                {/* Courses */}
                <button
                    type="button"
                    className="bg-gray-800/50 p-4 rounded-lg hover:bg-gray-700/50 transition-colors text-left"
                    onClick={() => handleSectionClick('courses')}
                    aria-label={t('notes.courses.desc')}
                >
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                            <FaBookOpen size={28} className="text-white"/>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-200">{t('notes.courses.title')}</h3>
                    </div>
                    <p className="text-gray-400">{t('notes.courses.desc')}</p>
                </button>

                {/* Skills */}
                <button
                    type="button"
                    className="bg-gray-800/50 p-4 rounded-lg hover:bg-gray-700/50 transition-colors text-left"
                    onClick={() => handleSectionClick('skills')}
                    aria-label={t('notes.skills.desc')}
                >
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center">
                            <FaCode size={28} className="text-white"/>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-200">{t('notes.skills.title')}</h3>
                    </div>
                    <p className="text-gray-400">{t('notes.skills.desc')}</p>
                </button>

                {/* STAR Projects */}
                <button
                    type="button"
                    className="bg-gray-800/50 p-4 rounded-lg hover:bg-gray-700/50 transition-colors text-left sm:col-span-2"
                    onClick={() => handleSectionClick('starprojects')}
                    aria-label={t('notes.starProjects.desc')}
                >
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center">
                            <FaStar size={28} className="text-white"/>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-200">{t('notes.starProjects.title')}</h3>
                    </div>
                    <p className="text-gray-400">{t('notes.starProjects.desc')}</p>
                </button>
            </div>
        </div>
    );

    const getWindowTitle = () => {
        switch (activeSection) {
            case 'menu':
                return t('notes.window.menu');
            case 'education':
                return t('notes.window.education');
            case 'experience':
                return t('notes.window.experience');
            case 'courses':
                return t('notes.window.courses');
            case 'skills':
                return t('notes.window.skills');
            case 'starprojects':
                return t('notes.window.starProjects');
            // case 'roles': return 'Extracurricular Roles Notes';
            // case 'activities': return 'Extracurricular Activities Notes';
            // case 'competitions': return 'Competitions Notes';
            default:
                return t('notes.window.menu');
        }
    };

    return (
        <DraggableWindow
            title={getWindowTitle()}
            onClose={onClose}
            initialPosition={{
                x: Math.floor(window.innerWidth * 0.3),
                y: Math.floor(window.innerHeight * 0.2)
            }}
            className="w-[93vw] md:max-w-4xl max-h-[90vh] flex flex-col"
            initialSize={{width: 700, height: 600}}
        >
            <div className="flex flex-col flex-grow min-h-0 h-full">
                <div className="overflow-y-auto flex-grow min-h-0 p-4 md:p-6">
                    {activeSection === 'menu' && renderMenu()}
                    {activeSection === 'education' && renderEducation()}
                    {activeSection === 'experience' && renderExperience()}
                    {activeSection === 'courses' && renderCourses()}
                    {activeSection === 'skills' && renderSkills()}
                    {activeSection === 'starprojects' && renderStarProjects()}
                    {/*{activeSection === 'roles' && renderExtraCurricularRoles()}*/}
                    {/*{activeSection === 'activities' && renderExtraCurricularActivities()}*/}
                    {/*{activeSection === 'competitions' && renderCompetitions()}*/}
                </div>
            </div>
        </DraggableWindow>
    );
};

export default NotesApp; 