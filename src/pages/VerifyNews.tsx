import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Upload, Search, CheckCircle, XCircle, AlertCircle, FileText, Image } from "lucide-react";

const VerifyNews = () => {
  const [newsText, setNewsText] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isVerifying, setIsVerifying] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [resultType, setResultType] = useState<"real" | "fake">("real");

  const handleVerify = () => {
    if (!newsText && !imageFile) return;
    
    setIsVerifying(true);
    // Simulate verification process
    setTimeout(() => {
      setIsVerifying(false);
      setShowResult(true);
      // Demo: randomly show real or fake
      setResultType(Math.random() > 0.5 ? "real" : "fake");
    }, 2000);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const resetForm = () => {
    setNewsText("");
    setImageFile(null);
    setShowResult(false);
    setIsVerifying(false);
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-3xl"
        >
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="mb-4 text-4xl font-bold">Verify News</h1>
            <p className="text-lg text-muted-foreground">
              Paste news text or upload an image to verify its authenticity
            </p>
          </div>

          {/* Input Section */}
          {!showResult && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="h-5 w-5 text-primary" />
                  Submit Content for Verification
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Text Input */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-medium">
                    <FileText className="h-4 w-4" />
                    News Text
                  </label>
                  <Textarea
                    placeholder="Paste the news article or headline here..."
                    value={newsText}
                    onChange={(e) => setNewsText(e.target.value)}
                    className="min-h-[150px] resize-none"
                  />
                </div>

                {/* Divider */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-2 text-muted-foreground">Or</span>
                  </div>
                </div>

                {/* Image Upload */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-medium">
                    <Image className="h-4 w-4" />
                    Upload Image
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                      id="image-upload"
                    />
                    <label
                      htmlFor="image-upload"
                      className="flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/25 bg-muted/50 p-8 transition-colors hover:border-primary/50 hover:bg-muted"
                    >
                      <Upload className="mb-3 h-10 w-10 text-muted-foreground" />
                      {imageFile ? (
                        <p className="font-medium text-primary">{imageFile.name}</p>
                      ) : (
                        <>
                          <p className="mb-1 font-medium">Click to upload image</p>
                          <p className="text-xs text-muted-foreground">PNG, JPG up to 10MB</p>
                        </>
                      )}
                    </label>
                  </div>
                </div>

                {/* Verify Button */}
                <Button
                  onClick={handleVerify}
                  disabled={!newsText && !imageFile}
                  className="w-full"
                  size="lg"
                >
                  {isVerifying ? (
                    <>
                      <div className="mr-2 h-5 w-5 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Search className="mr-2 h-5 w-5" />
                      Verify Now
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Result Section */}
          {showResult && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <Card className={`overflow-hidden border-2 ${resultType === "real" ? "border-verified" : "border-fake"}`}>
                <CardHeader className={`${resultType === "real" ? "bg-verified/10" : "bg-fake/10"}`}>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-3">
                      {resultType === "real" ? (
                        <CheckCircle className="h-8 w-8 text-verified" />
                      ) : (
                        <XCircle className="h-8 w-8 text-fake" />
                      )}
                      Verification Result
                    </CardTitle>
                    <Badge variant={resultType === "real" ? "verified" : "fake"} className="text-sm">
                      {resultType === "real" ? "VERIFIED REAL" : "LIKELY FAKE"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6 pt-6">
                  {/* Confidence Score */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Confidence Score</span>
                      <span className={`font-bold ${resultType === "real" ? "text-verified" : "text-fake"}`}>
                        {resultType === "real" ? "87%" : "73%"}
                      </span>
                    </div>
                    <Progress
                      value={resultType === "real" ? 87 : 73}
                      className={`h-3 ${resultType === "real" ? "[&>div]:bg-verified" : "[&>div]:bg-fake"}`}
                    />
                  </div>

                  {/* Analysis Details */}
                  <div className="space-y-4 rounded-lg bg-muted/50 p-4">
                    <h4 className="flex items-center gap-2 font-semibold">
                      <AlertCircle className="h-4 w-4 text-primary" />
                      Analysis Details
                    </h4>
                    
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start gap-3">
                        <div className={`mt-1 h-2 w-2 rounded-full ${resultType === "real" ? "bg-verified" : "bg-fake"}`} />
                        <div>
                          <p className="font-medium">Source Credibility</p>
                          <p className="text-muted-foreground">
                            {resultType === "real"
                              ? "Content matches verified sources with high reliability score."
                              : "Unable to verify content with trusted sources."}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className={`mt-1 h-2 w-2 rounded-full ${resultType === "real" ? "bg-verified" : "bg-fake"}`} />
                        <div>
                          <p className="font-medium">Language Analysis</p>
                          <p className="text-muted-foreground">
                            {resultType === "real"
                              ? "Writing style consistent with professional journalism."
                              : "Detected sensationalized language patterns."}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className={`mt-1 h-2 w-2 rounded-full ${resultType === "real" ? "bg-verified" : "bg-fake"}`} />
                        <div>
                          <p className="font-medium">Cross-Reference Check</p>
                          <p className="text-muted-foreground">
                            {resultType === "real"
                              ? "Information corroborated by multiple independent sources."
                              : "Limited or no corroborating evidence found."}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button onClick={resetForm} variant="outline" className="w-full">
                    Verify Another Article
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default VerifyNews;
