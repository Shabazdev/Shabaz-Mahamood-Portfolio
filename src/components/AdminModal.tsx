import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Settings, Check, RotateCcw, Plus, Trash2 } from 'lucide-react';
import { PortfolioData, Project } from '../types';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: PortfolioData;
  onSave: (newData: PortfolioData) => void;
  onReset: () => void;
}

export const AdminModal: React.FC<AdminModalProps> = ({ isOpen, onClose, data, onSave, onReset }) => {
  const [activeTab, setActiveTab] = useState<'profile' | 'projects'>('profile');
  const [profileForm, setProfileForm] = useState(data.profile);
  const [projectsList, setProjectsList] = useState<Project[]>(data.projects);
  const [savedMessage, setSavedMessage] = useState(false);

  if (!isOpen) return null;

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      ...data,
      profile: profileForm,
      projects: projectsList
    });
    setSavedMessage(true);
    setTimeout(() => setSavedMessage(false), 2000);
  };

  const handleAddProject = () => {
    const newProject: Project = {
      id: `project-${Date.now()}`,
      title: "New Amazing Project",
      category: "Full-Stack Web App",
      description: "Description of your new project goes here.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
      tags: ["React", "TypeScript", "Tailwind"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true
    };
    setProjectsList([newProject, ...projectsList]);
  };

  const handleDeleteProject = (id: string) => {
    setProjectsList(projectsList.filter(p => p.id !== id));
  };

  const handleUpdateProjectField = (id: string, field: keyof Project, value: any) => {
    setProjectsList(projectsList.map(p => p.id === id ? { ...p, [field]: value } : p));
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-3xl bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl my-auto max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="p-6 border-b border-zinc-800 flex items-center justify-between bg-zinc-900/60">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#00ff66]/20 border border-[#00ff66]/40 flex items-center justify-center text-[#00ff66]">
                <Settings className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Portfolio Customizer</h2>
                <p className="text-xs font-mono text-zinc-400">Edit developer info & manage projects in real time</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-700 text-zinc-300 hover:text-white transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-zinc-800 bg-zinc-900/30 px-6">
            <button
              onClick={() => setActiveTab('profile')}
              className={`py-3 px-6 text-sm font-semibold border-b-2 transition-all cursor-pointer ${
                activeTab === 'profile'
                  ? 'border-[#00ff66] text-[#00ff66]'
                  : 'border-transparent text-zinc-400 hover:text-white'
              }`}
            >
              Profile Settings
            </button>
            <button
              onClick={() => setActiveTab('projects')}
              className={`py-3 px-6 text-sm font-semibold border-b-2 transition-all cursor-pointer ${
                activeTab === 'projects'
                  ? 'border-[#00ff66] text-[#00ff66]'
                  : 'border-transparent text-zinc-400 hover:text-white'
              }`}
            >
              Manage Projects ({projectsList.length})
            </button>
          </div>

          {/* Body content */}
          <div className="p-6 sm:p-8 overflow-y-auto flex-1">
            {activeTab === 'profile' ? (
              <form onSubmit={handleSaveProfile} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 uppercase tracking-widest mb-2">
                      Developer Name
                    </label>
                    <input
                      type="text"
                      value={profileForm.name}
                      onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm focus:border-[#00ff66] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 uppercase tracking-widest mb-2">
                      Professional Title
                    </label>
                    <input
                      type="text"
                      value={profileForm.title}
                      onChange={(e) => setProfileForm({ ...profileForm, title: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm focus:border-[#00ff66] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 uppercase tracking-widest mb-2">
                    Hero Headline
                  </label>
                  <input
                    type="text"
                    value={profileForm.headline}
                    onChange={(e) => setProfileForm({ ...profileForm, headline: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm focus:border-[#00ff66] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 uppercase tracking-widest mb-2">
                    Developer Bio
                  </label>
                  <textarea
                    rows={3}
                    value={profileForm.bio}
                    onChange={(e) => setProfileForm({ ...profileForm, bio: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm focus:border-[#00ff66] focus:outline-none resize-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 uppercase tracking-widest mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={profileForm.email}
                      onChange={(e) => setProfileForm({ ...profileForm, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm focus:border-[#00ff66] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 uppercase tracking-widest mb-2">
                      Location
                    </label>
                    <input
                      type="text"
                      value={profileForm.location}
                      onChange={(e) => setProfileForm({ ...profileForm, location: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm focus:border-[#00ff66] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 uppercase tracking-widest mb-2">
                      Projects Completed
                    </label>
                    <input
                      type="number"
                      value={profileForm.projectsCompleted}
                      onChange={(e) => setProfileForm({ ...profileForm, projectsCompleted: parseInt(e.target.value) || 0 })}
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm focus:border-[#00ff66] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 uppercase tracking-widest mb-2">
                      Years of Experience
                    </label>
                    <input
                      type="number"
                      value={profileForm.yearsOfExperience}
                      onChange={(e) => setProfileForm({ ...profileForm, yearsOfExperience: parseInt(e.target.value) || 0 })}
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm focus:border-[#00ff66] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 uppercase tracking-widest mb-2">
                    Avatar Image URL
                  </label>
                  <input
                    type="text"
                    value={profileForm.avatarUrl}
                    onChange={(e) => setProfileForm({ ...profileForm, avatarUrl: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm focus:border-[#00ff66] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 uppercase tracking-widest mb-2">
                    Intro Video URL (YouTube embed or watch link)
                  </label>
                  <input
                    type="text"
                    value={profileForm.videoUrl}
                    onChange={(e) => setProfileForm({ ...profileForm, videoUrl: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm focus:border-[#00ff66] focus:outline-none"
                  />
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
                  <button
                    type="button"
                    onClick={() => {
                      onReset();
                      onClose();
                    }}
                    className="px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-700 text-red-400 hover:bg-zinc-800 text-xs font-mono flex items-center gap-2 cursor-pointer"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Reset Defaults</span>
                  </button>

                  <div className="flex items-center gap-3">
                    {savedMessage && (
                      <span className="text-[#00ff66] text-xs font-mono flex items-center gap-1">
                        <Check className="w-4 h-4" /> Saved!
                      </span>
                    )}
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium shadow-lg hover:scale-[1.02] transition-all cursor-pointer"
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </form>
            ) : (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-bold text-base">Project Portfolio</h3>
                    <p className="text-xs text-zinc-400 font-mono">Add or remove your projects</p>
                  </div>
                  <button
                    onClick={handleAddProject}
                    className="px-4 py-2 rounded-xl bg-[#00ff66]/20 border border-[#00ff66]/40 text-[#00ff66] hover:bg-[#00ff66]/30 text-xs font-mono flex items-center gap-2 cursor-pointer"
                  >
                    <Plus className="w-4 h-4" /> Add Project
                  </button>
                </div>

                <div className="space-y-4">
                  {projectsList.map((project) => (
                    <div key={project.id} className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-4">
                      <div className="flex items-center justify-between">
                        <input
                          type="text"
                          value={project.title}
                          onChange={(e) => handleUpdateProjectField(project.id, 'title', e.target.value)}
                          className="bg-zinc-950 border border-zinc-700 rounded-lg px-3 py-1.5 text-white font-bold text-sm w-full max-w-xs focus:outline-none focus:border-[#00ff66]"
                        />
                        <button
                          onClick={() => handleDeleteProject(project.id)}
                          className="p-2 rounded-lg bg-red-950/40 border border-red-800 text-red-400 hover:bg-red-900/50 transition-colors"
                          title="Delete project"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <input
                          type="text"
                          value={project.category}
                          onChange={(e) => handleUpdateProjectField(project.id, 'category', e.target.value)}
                          placeholder="Category"
                          className="bg-zinc-950 border border-zinc-700 rounded-lg px-3 py-1.5 text-zinc-300 text-xs focus:outline-none"
                        />
                        <input
                          type="text"
                          value={project.image}
                          onChange={(e) => handleUpdateProjectField(project.id, 'image', e.target.value)}
                          placeholder="Image URL"
                          className="bg-zinc-950 border border-zinc-700 rounded-lg px-3 py-1.5 text-zinc-300 text-xs focus:outline-none"
                        />
                      </div>

                      <textarea
                        rows={2}
                        value={project.description}
                        onChange={(e) => handleUpdateProjectField(project.id, 'description', e.target.value)}
                        placeholder="Short description"
                        className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-3 py-1.5 text-zinc-300 text-xs focus:outline-none resize-none"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex justify-end pt-4 border-t border-zinc-800">
                  <button
                    onClick={() => {
                      onSave({ ...data, profile: profileForm, projects: projectsList });
                      setSavedMessage(true);
                      setTimeout(() => setSavedMessage(false), 2000);
                    }}
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium shadow-lg hover:scale-[1.02] transition-all cursor-pointer flex items-center gap-2"
                  >
                    {savedMessage && <Check className="w-4 h-4" />}
                    <span>Save Projects</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
