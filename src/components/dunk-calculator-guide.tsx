import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function DunkCalculatorGuide() {
    return (
        <section id="guide">
            <Card className="max-w-4xl mx-auto shadow-lg">
                <CardHeader>
                    <CardTitle className="font-headline text-3xl text-center">
                        The Ultimate Guide to Using a Dunk Calculator
                    </CardTitle>
                </CardHeader>
                <CardContent className="px-6 md:px-8 space-y-6 text-base text-foreground/90">
                    <div>
                        <h2 className="text-2xl font-bold font-headline mb-2">Introduction: What is a Dunk Calculator?</h2>
                        <p>A dunk calculator is a specialized tool designed to help basketball players and enthusiasts determine if they have the physical ability to dunk a basketball on a standard 10-foot rim. By inputting key metrics like height, standing reach, and vertical jump, a dunk calculator provides a precise analysis of your current capabilities and what you need to improve to achieve one of basketball's most electrifying plays. This guide will walk you through everything you need to know about using a dunk calculator, understanding the results, and training to finally throw one down.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold font-headline mb-2">Why Use a Dunk Calculator?</h2>
                        <p>The dream of dunking is universal among basketball players, but it often feels like an ambiguous goal. A dunk calculator demystifies this goal by breaking it down into measurable components. Here’s why it’s an invaluable tool:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li><strong>Clarity and Goal Setting:</strong> It provides a clear, numerical target. Instead of just "jumping higher," you'll know you need to add exactly 3 more inches to your vertical.</li>
                            <li><strong>Motivation:</strong> Seeing how close you are can be a powerful motivator. The progress bar visualizes your journey and encourages you to keep training.</li>
                            <li><strong>Smart Training:</strong> By understanding the specific metrics you need to improve, you can tailor your workout regimen to be more effective, focusing on areas like explosive power or strength.</li>
                            <li><strong>Realistic Expectations:</strong> It helps you set realistic expectations. While almost anyone can improve their vertical leap, the calculator helps you understand the commitment required based on your body's natural attributes.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold font-headline mb-2">Understanding the Key Metrics</h2>
                        <p>To get an accurate result from any dunk calculator, you need to provide accurate inputs. Let's break down the three core components:</p>
                        
                        <h3 className="text-xl font-bold font-headline mt-4 mb-2">1. Height</h3>
                        <p>This is your standard height without shoes. While it's a contributing factor, it's less important than your standing reach. Two people of the same height can have vastly different arm lengths and, therefore, different standing reaches.</p>
                        
                        <h3 className="text-xl font-bold font-headline mt-4 mb-2">2. Standing Reach</h3>
                        <p>This is arguably the most critical measurement. Your standing reach is how high you can reach with one hand while standing flat-footed. To measure it accurately:</p>
                        <ol className="list-decimal pl-6 space-y-2 mt-2">
                            <li>Stand next to a wall with your feet flat on the ground.</li>
                            <li>Reach up as high as you can with one hand, keeping your arm straight.</li>
                            <li>Have a friend mark the highest point your fingertips touch, or make a light mark yourself with chalk or a pencil.</li>
                            <li>Measure the distance from the floor to the mark. That's your standing reach.</li>
                        </ol>
                        <p className="mt-2">If you don't have a way to measure this, our dunk calculator can estimate it for you based on your height, using a common multiplier (approximately 1.31 times your height), but a direct measurement is always more accurate.</p>

                        <h3 className="text-xl font-bold font-headline mt-4 mb-2">3. Vertical Jump (or Vertical Leap)</h3>
                        <p>This measures your explosive jumping ability. It's the difference between your standing reach and your maximum jump reach. To measure your vertical jump:</p>
                         <ol className="list-decimal pl-6 space-y-2 mt-2">
                            <li>Perform the standing reach test as described above to get your baseline.</li>
                            <li>From a standing start, jump as high as you possibly can, touching the wall at the peak of your jump. Mark this spot.</li>
                            <li>The vertical distance between your standing reach mark and your jump reach mark is your vertical jump.</li>
                        </ol>
                        <p className="mt-2">For the most accurate result, perform a few jumps and take the best one. Ensure you are using a "no-step" vertical jump for the calculator's purposes.</p>
                    </div>
                    
                    <div>
                        <h2 className="text-2xl font-bold font-headline mb-2">How the Dunk Calculator Works: The Math Behind the Magic</h2>
                        <p>The calculation itself is straightforward. The goal is to determine your "Maximum Jump Reach" and compare it to the "Target Dunk Height."</p>
                        <p className="mt-2"><strong className="font-semibold">Maximum Jump Reach = Standing Reach + Vertical Jump</strong></p>
                        <p className="mt-2">However, simply reaching the rim isn't enough. To successfully dunk, you need to get your hand significantly over the rim to control the ball and force it through the hoop. A good rule of thumb is that you need about <strong className="font-semibold">6 inches of clearance above the rim.</strong></p>
                        <p className="mt-2">A standard NBA, FIBA, and NCAA basketball rim is 10 feet (120 inches or 305 cm) off the ground.</p>
                        <p className="mt-2"><strong className="font-semibold">Target Dunk Height = Rim Height (120 inches) + Dunk Clearance (6 inches) = 126 inches</strong></p>
                        <p className="mt-2">Our dunk calculator uses this formula: It calculates your Maximum Jump Reach and tells you if it meets or exceeds the 126-inch Target Dunk Height. If you fall short, it calculates the difference, showing you exactly how much more you need to add to your vertical jump.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold font-headline mb-2">Interpreting Your Results and Next Steps</h2>
                        <p>After you input your stats and hit "Calculate," you'll get one of two results:</p>
                        <h3 className="text-xl font-bold font-headline mt-4 mb-2">Result 1: Congratulations, You Can Dunk!</h3>
                        <p>If your maximum reach is over 126 inches, the dunk calculator will give you the green light. This means, physically, you have the jumping ability. Now, it's about translating that potential into skill. Practice timing your approach, palming the basketball (if possible), and coordinating your jump to successfully finish at the rim.</p>

                        <h3 className="text-xl font-bold font-headline mt-4 mb-2">Result 2: You're Close! Here's What You Need.</h3>
                        <p>If you're not there yet, don't be discouraged! This is where the real value of the dunk calculator comes in. It will tell you the exact number of inches you need to add to your vertical leap. This becomes your new training goal. For example, if it says you need 4 more inches, your entire training focus should be on a program designed to increase your vertical by that amount.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold font-headline mb-2">A Basic Training Plan to Improve Your Vertical</h2>
                        <p>Achieving your dunking goal requires a dedicated training plan that focuses on building explosive power in your legs and core. This involves two main types of training:</p>
                        <h3 className="text-xl font-bold font-headline mt-4 mb-2">1. Strength Training (The Foundation)</h3>
                        <p>You can't be explosive without a strong base. Focus on compound movements that work multiple muscle groups in your lower body and core.</p>
                        <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li><strong>Squats:</strong> The king of leg exercises. Barbell back squats build raw power in your quads, glutes, and hamstrings.</li>
                            <li><strong>Deadlifts:</strong> Develops your entire posterior chain (hamstrings, glutes, lower back), which is crucial for jumping power.</li>
                            <li><strong>Lunges:</strong> Great for single-leg strength and stability, mimicking the one-foot takeoff motion.</li>
                            <li><strong>Calf Raises:</strong> Don't neglect your calves; they provide the final push in a jump.</li>
                        </ul>

                        <h3 className="text-xl font-bold font-headline mt-4 mb-2">2. Plyometrics (The Explosiveness)</h3>
                        <p>Plyometrics train your muscles to produce maximum force in minimum time—the very definition of a vertical jump.</p>
                         <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li><strong>Box Jumps:</strong> Jump onto a stable box or platform. Focus on landing softly and exploding upwards.</li>
                            <li><strong>Depth Jumps:</strong> Step off a low box and, immediately upon landing, jump as high as you can. This trains your muscles' stretch-shortening cycle.</li>
                            <li><strong>Tuck Jumps:</strong> Jump vertically and bring your knees to your chest.</li>
                            <li><strong>Skipping:</strong> A simple but effective way to improve coordination and footwork.</li>
                        </ul>
                         <p className="mt-4"><strong className="font-semibold">Important Note:</strong> Always prioritize proper form to prevent injury. If you are new to these exercises, consider working with a coach or trainer. Rest and recovery are just as important as the training itself. Give your muscles time to repair and grow stronger.</p>
                    </div>
                     <div>
                        <h2 className="text-2xl font-bold font-headline mb-2">Conclusion: From Calculation to Reality</h2>
                        <p>A dunk calculator is more than just a fun tool; it's a roadmap. It transforms the abstract dream of dunking into a tangible, achievable goal. By providing you with precise data, it empowers you to train smarter, stay motivated, and track your progress effectively. Input your stats, understand your target, and commit to a consistent training plan. With dedication and the right approach, the dunk calculator can be the first step on your journey to soaring above the rim.</p>
                    </div>
                </CardContent>
            </Card>
        </section>
    )
}
