import { Instagram, Facebook, Twitter, Globe } from "lucide-react"

export default function Footer() {
    return (
        <footer className="w-full bg-gray-50 py-8 px-4 md:px-6 border-t border-gray-200">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div className="space-y-4 max-w-md">
                        <div className="flex items-center gap-2">
                            <img src="/assets/confide_logo_dark.png" alt="Logo_Confide" />
                        </div>
                        <p className="text-sm text-gray-600">
                            Join our thriving community today and experience the power of meaningful connections.
                        </p>
                    </div>

                    <div className="flex flex-col space-y-4 md:items-end">
                        <nav className="flex flex-col md:items-end space-y-2">
                            <a href="/terms" className="text-sm text-gray-600 hover:text-gray-900">
                                Terms and Conditions
                            </a>
                            <a href="/contact" className="text-sm text-gray-600 hover:text-gray-900">
                                Contact Us
                            </a>
                            <a href="/privacy" className="text-sm text-gray-600 hover:text-gray-900">
                                Privacy Policy
                            </a>
                        </nav>

                        <div className="flex items-center space-x-4 mt-4">
                            <a href="#" aria-label="Globe">
                                <Globe className="h-4 w-4 text-gray-500 hover:text-gray-700" />
                            </a>
                            <a href="#" aria-label="Twitter">
                                <Twitter className="h-4 w-4 text-gray-500 hover:text-gray-700" />
                            </a>
                            <a href="#" aria-label="Facebook">
                                <Facebook className="h-4 w-4 text-gray-500 hover:text-gray-700" />
                            </a>
                            <a href="#" aria-label="Instagram">
                                <Instagram className="h-4 w-4 text-gray-500 hover:text-gray-700" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-4 border-t border-gray-200">
                    <p className="text-xs text-gray-500">© 2024 Confide Community. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
