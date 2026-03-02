import { motion } from 'framer-motion';
import { LEADERBOARD_DATA } from '../data';
import { Trophy, Medal, Star } from 'lucide-react';

const Leaderboard = () => {
    const topThree = LEADERBOARD_DATA.slice(0, 3);
    const others = LEADERBOARD_DATA.slice(3);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.05 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
    };

    const getRankIcon = (rank) => {
        switch (rank) {
            case 1: return <Trophy className="text-yellow-400 w-8 h-8" />;
            case 2: return <Medal className="text-slate-300 w-8 h-8" />;
            case 3: return <Medal className="text-amber-600 w-8 h-8" />;
            default: return null;
        }
    };

    const getRankColor = (rank) => {
        switch (rank) {
            case 1: return 'border-yellow-400/50 bg-yellow-400/5';
            case 2: return 'border-slate-300/50 bg-slate-400/5';
            case 3: return 'border-amber-600/50 bg-amber-600/5';
            default: return 'border-white/10 bg-white/5 hover:border-accent/40 hover:bg-accent/5';
        }
    };

    return (
        <section id="leaderboard" className="py-24 px-4 max-w-5xl mx-auto">
            <div className="mb-16">
                <h2 className="text-5xl font-bold mb-4">LEADER<span className="text-accent underline decoration-accent/30 underline-offset-8">BOARD</span></h2>
                <p className="text-text-secondary font-mono">Season 1 &bull; Active Students Ranking</p>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="space-y-4"
            >
                {/* Header (Hidden on small screens) */}
                <div className="hidden md:flex px-8 py-2 text-text-dim text-xs font-mono uppercase tracking-[0.2em]">
                    <span className="w-20">Rank</span>
                    <span className="flex-1">Student Name</span>
                    <span className="w-32 text-right">Points</span>
                </div>

                {LEADERBOARD_DATA.map((student) => (
                    <motion.div
                        key={student.id}
                        variants={itemVariants}
                        className={`group relative flex items-center px-6 md:px-8 py-5 border transition-all duration-300 ${getRankColor(student.rank)}`}
                    >
                        {/* Rank Number */}
                        <div className="w-20 flex items-center gap-2">
                            <span className={`text-2xl font-black font-mono ${student.rank <= 3 ? 'text-accent' : 'text-text-secondary group-hover:text-accent transition-colors'}`}>
                                {student.rank.toString().padStart(2, '0')}
                            </span>
                            {getRankIcon(student.rank)}
                        </div>

                        {/* Student Info */}
                        <div className="flex-1">
                            <h3 className="text-xl font-bold tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                                {student.name}
                            </h3>
                        </div>

                        {/* Score */}
                        <div className="w-32 text-right">
                            <span className="text-xl font-mono font-bold text-accent">
                                {student.score}
                            </span>
                        </div>

                        {/* Hover Glow Edge */}
                        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Leaderboard;
